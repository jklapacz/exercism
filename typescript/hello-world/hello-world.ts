class HelloWorld {
    static hello(name?: string) {
        const displayedName = name || "World"

        return `Hello, ${displayedName}!`;
        // return "Hello, World!"
    }
}

export default HelloWorld