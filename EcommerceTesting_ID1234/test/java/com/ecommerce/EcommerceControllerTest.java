import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.HashMap;
import java.util.Map;

class UserServiceTest {

    private UserService userService;
    private MockUserRepository mockUserRepository;

    @BeforeEach
    void setUp() {
        mockUserRepository = new MockUserRepository();
        userService = new UserService(mockUserRepository);
    }

    @Test
    void testCreateUser_Success() {
        User user = new User("John", "Doe", "john@example.com");
        assertTrue(userService.createUser(user));
        assertEquals(user, mockUserRepository.getUser(user.getEmail()));
    }

    @Test
    void testCreateUser_DuplicateEmail() {
        User user1 = new User("John", "Doe", "john@example.com");
        User user2 = new User("Jane", "Doe", "john@example.com");
        
        assertTrue(userService.createUser(user1));
        assertFalse(userService.createUser(user2));
    }

    @Test
    void testGetUser_ExistingUser() {
        User user = new User("John", "Doe", "john@example.com");
        mockUserRepository.save(user);
        
        User retrievedUser = userService.getUser("john@example.com");
        assertNotNull(retrievedUser);
        assertEquals(user, retrievedUser);
    }

    @Test
    void testGetUser_NonExistingUser() {
        User retrievedUser = userService.getUser("nonexistent@example.com");
        assertNull(retrievedUser);
    }

    @Test
    void testUpdateUser_Success() {
        User user = new User("John", "Doe", "john@example.com");
        mockUserRepository.save(user);
        
        User updatedUser = new User("John", "Smith", "john@example.com");
        assertTrue(userService.updateUser(updatedUser));
        assertEquals(updatedUser, mockUserRepository.getUser(user.getEmail()));
    }

    @Test
    void testUpdateUser_NonExistingUser() {
        User updatedUser = new User("John", "Smith", "nonexistent@example.com");
        assertFalse(userService.updateUser(updatedUser));
    }

    @Test
    void testDeleteUser_Success() {
        User user = new User("John", "Doe", "john@example.com");
        mockUserRepository.save(user);
        
        assertTrue(userService.deleteUser("john@example.com"));
        assertNull(mockUserRepository.getUser(user.getEmail()));
    }

    @Test
    void testDeleteUser_NonExistingUser() {
        assertFalse(userService.deleteUser("nonexistent@example.com"));
    }

    // Mock implementation of UserRepository
    private static class MockUserRepository implements UserRepository {
        private final Map<String, User> users = new HashMap<>();

        @Override
        public void save(User user) {
            users.put(user.getEmail(), user);
        }

        @Override
        public User findByEmail(String email) {
            return users.get(email);
        }

        @Override
        public void delete(String email) {
            users.remove(email);
        }

        // Helper method for testing
        public User getUser(String email) {
            return users.get(email);
        }
    }

    // UserService implementation
    private static class UserService {
        private final UserRepository userRepository;

        public UserService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

        public boolean createUser(User user) {
            if (userRepository.findByEmail(user.getEmail()) != null) {
                return false;
            }
            userRepository.save(user);
            return true;
        }

        public User getUser(String email) {
            return userRepository.findByEmail(email);
        }

        public boolean updateUser(User user) {
            if (userRepository.findByEmail(user.getEmail()) == null) {
                return false;
            }
            userRepository.save(user);
            return true;
        }

        public boolean deleteUser(String email) {
            if (userRepository.findByEmail(email) == null) {
                return false;
            }
            userRepository.delete(email);
            return true;
        }
    }

    // User model
    private static class User {
        private final String firstName;
        private final String lastName;
        private final String email;

        public User(String firstName, String lastName, String email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }

        public String getEmail() {
            return email;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            User user = (User) o;
            return firstName.equals(user.firstName) &&
                   lastName.equals(user.lastName) &&
                   email.equals(user.email);
        }

        @Override
        public int hashCode() {
            return email.hashCode();
        }
    }

    // UserRepository interface
    private interface UserRepository {
        void save(User user);
        User findByEmail(String email);
        void delete(String email);
    }
}