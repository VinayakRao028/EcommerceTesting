import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.ArrayList;
import java.util.List;

public class UserServiceTest {

    private UserService userService;
    private MockUserRepository mockUserRepository;

    @BeforeEach
    void setUp() {
        mockUserRepository = new MockUserRepository();
        userService = new UserService(mockUserRepository);
    }

    @Test
    void testCreateUser() {
        User user = new User("John Doe", "john@example.com");
        User createdUser = userService.createUser(user);

        assertNotNull(createdUser);
        assertEquals("John Doe", createdUser.getName());
        assertEquals("john@example.com", createdUser.getEmail());
        assertTrue(createdUser.getId() > 0);
    }

    @Test
    void testGetUserById() {
        User user = new User("Jane Doe", "jane@example.com");
        User createdUser = userService.createUser(user);

        User retrievedUser = userService.getUserById(createdUser.getId());

        assertNotNull(retrievedUser);
        assertEquals(createdUser.getId(), retrievedUser.getId());
        assertEquals("Jane Doe", retrievedUser.getName());
        assertEquals("jane@example.com", retrievedUser.getEmail());
    }

    @Test
    void testGetUserByIdNotFound() {
        assertThrows(UserNotFoundException.class, () -> userService.getUserById(999L));
    }

    @Test
    void testUpdateUser() {
        User user = new User("Alice", "alice@example.com");
        User createdUser = userService.createUser(user);

        User updatedUser = new User(createdUser.getId(), "Alice Updated", "alice.updated@example.com");
        User result = userService.updateUser(updatedUser);

        assertNotNull(result);
        assertEquals(createdUser.getId(), result.getId());
        assertEquals("Alice Updated", result.getName());
        assertEquals("alice.updated@example.com", result.getEmail());
    }

    @Test
    void testUpdateUserNotFound() {
        User nonExistentUser = new User(999L, "Non-existent", "non-existent@example.com");
        assertThrows(UserNotFoundException.class, () -> userService.updateUser(nonExistentUser));
    }

    @Test
    void testDeleteUser() {
        User user = new User("Bob", "bob@example.com");
        User createdUser = userService.createUser(user);

        assertDoesNotThrow(() -> userService.deleteUser(createdUser.getId()));
        assertThrows(UserNotFoundException.class, () -> userService.getUserById(createdUser.getId()));
    }

    @Test
    void testDeleteUserNotFound() {
        assertThrows(UserNotFoundException.class, () -> userService.deleteUser(999L));
    }

    // Mock implementation of UserRepository
    private static class MockUserRepository implements UserRepository {
        private List<User> users = new ArrayList<>();
        private long idCounter = 1;

        @Override
        public User save(User user) {
            if (user.getId() == null) {
                user.setId(idCounter++);
                users.add(user);
            } else {
                users.removeIf(u -> u.getId().equals(user.getId()));
                users.add(user);
            }
            return user;
        }

        @Override
        public User findById(Long id) {
            return users.stream()
                    .filter(u -> u.getId().equals(id))
                    .findFirst()
                    .orElse(null);
        }

        @Override
        public void deleteById(Long id) {
            users.removeIf(u -> u.getId().equals(id));
        }
    }

    // UserService implementation
    public static class UserService {
        private final UserRepository userRepository;

        public UserService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

        public User createUser(User user) {
            return userRepository.save(user);
        }

        public User getUserById(Long id) {
            User user = userRepository.findById(id);
            if (user == null) {
                throw new UserNotFoundException("User not found with id: " + id);
            }
            return user;
        }

        public User updateUser(User user) {
            if (userRepository.findById(user.getId()) == null) {
                throw new UserNotFoundException("User not found with id: " + user.getId());
            }
            return userRepository.save(user);
        }

        public void deleteUser(Long id) {
            if (userRepository.findById(id) == null) {
                throw new UserNotFoundException("User not found with id: " + id);
            }
            userRepository.deleteById(id);
        }
    }

    // User entity
    public static class User {
        private Long id;
        private String name;
        private String email;

        public User(String name, String email) {
            this.name = name;
            this.email = email;
        }

        public User(Long id, String name, String email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public String getEmail() {
            return email;
        }
    }

    // UserRepository interface
    public interface UserRepository {
        User save(User user);
        User findById(Long id);
        void deleteById(Long id);
    }

    // Custom exception
    public static class UserNotFoundException extends RuntimeException {
        public UserNotFoundException(String message) {
            super(message);
        }
    }
}