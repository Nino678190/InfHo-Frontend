// authUtil.ts

interface UserData {
    token: string | null;
    email: string | null;
    // Add other user properties as needed (e.g., username)
    username?: string | null;
}

const storageKey = 'authData';

let userData: UserData = {
    token: null,
    email: null,
    // Initialize other user properties here
};

// Load user data from localStorage on application start
const storedUserData = localStorage.getItem(storageKey);
if (storedUserData) {
    userData = JSON.parse(storedUserData);
}

export const setUserData = (userData: UserData): void => {
    // Merge the new user data with existing data
    userData = { ...userData, ...userData };
    // Store user data in localStorage
    localStorage.setItem(storageKey, JSON.stringify(userData));
};

export const getUserData = async (): Promise<UserData> => {
    // Check if user data is already available
    if (userData.token && userData.email) {
        return userData;
    }

    // Fetch user data from the API (replace with your actual API endpoint)
    try {
        const response = await fetch('/api/user-data', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Add your authentication header here
            },
        });

        if (response.ok) {
            const data = await response.json();
            setUserData(data);
            return data;
        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const login = async (email: string, password: string): Promise<void> => {
    try {
        // Replace with your actual login API endpoint
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            setUserData(data);
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const register = async (email: string, password: string, username?: string): Promise<void> => {
    try {
        // Replace with your actual registration API endpoint
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, username }),
        });

        if (response.ok) {
            const data = await response.json();
            setUserData(data);
        } else {
            throw new Error('Registration failed');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export const isAuthenticated = (): boolean => {
    return !!userData.token;
};

// Exporting the entire module (all functions and types)
export default {
    setUserData,
    getUserData,
    login,
    register,
    isAuthenticated,
};
