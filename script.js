function shortcut(str1: string, str2: string): string {
    // Check if either input string is empty
    if (str1.length === 0 || str2.length === 0) {
        return '';
    }

    // Return the initial letters of the input strings
    return str1.charAt(0).toUpperCase() + str2.charAt(0).toUpperCase();
}

// Examples
console.log(shortcut("Amnesty", "International"));  // Output: 'AI'
console.log(shortcut("Hello", "world"));            // Output: 'Hw'
console.log(shortcut("", "International"));          // Output: ''
console.log(shortcut("Amnesty", ""));                // Output: ''
