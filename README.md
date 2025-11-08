# Belajar Dasar Pemrograman JavaScript

This repository contains assignments and exercises from the "Belajar Dasar Pemrograman JavaScript" course on Dicoding. It covers fundamental JavaScript concepts including comments, code style, testing, object-oriented programming (OOP), recursion, and real-world scenarios.

## Table of Contents

- [01-writing-comments](#01-writing-comments)
- [02-code-style](#02-code-style)
- [03-writing-test](#03-writing-test)
- [optional-04-oop](#optional-04-oop)
- [optional-05-recursive](#optional-05-recursive)
- [optional-06-full-coverage-testing](#optional-06-full-coverage-testing)
- [optional-07-real-world-scenario](#optional-07-real-world-scenario)

## Prerequisites

- Node.js (version 14 or higher)
- Basic understanding of JavaScript

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/rakasatriaefendi/Belajar-Dasar-Pemrograman-JavaScript.git
   cd Belajar-Dasar-Pemrograman-JavaScript
   ```

2. For testing modules, install dependencies if needed:
   ```bash
   npm install
   ```

## Assignments

### 01-writing-comments

**Objective:** Practice writing single-line and multi-line comments in JavaScript.

- **Files:** `index.js`, `instruksi.md`
- **Task:** Add username as a single-line comment and write goals as multi-line comments.

### 02-code-style

**Objective:** Apply consistent code style rules.

- **Files:** `index.js`, `instruksi.md`
- **Task:** Refactor code to follow style guidelines:
  - Use semicolons at the end of statements
  - 2-space indentation
  - Use `const` for non-reassigned variables
  - Proper spacing in object literals

### 03-writing-test

**Objective:** Write unit tests for a simple sum function.

- **Files:** `index.js`, `index.test.js`, `instruksi.md`, `package.json`
- **Task:** Create comprehensive tests for the `sum` function using Node.js built-in test module.
- **Run tests:** `npm test`

### optional-04-oop

**Objective:** Implement object-oriented programming concepts.

- **Files:** `Item.js`, `Inventory.js`, `main.js`, `instruksi.md`, `package.json`
- **Task:** Create `Item` and `Inventory` classes for a simple inventory management system.
- **Features:**
  - Add, remove, and list items
  - Update item details

### optional-05-recursive

**Objective:** Implement recursive functions.

- **Files:** `factorial.js`, `fibonacci.js`, `main.js`, `instruksi.md`, `package.json`
- **Task:** Write recursive functions for factorial and Fibonacci sequence generation.

### optional-06-full-coverage-testing

**Objective:** Write comprehensive tests with full coverage.

- **Files:** `index.js`, `index.test.js`, `instruksi.md`, `package.json`
- **Task:** Test the `sum` function with various input types and edge cases.
- **Run tests:** `npm test`

### optional-07-real-world-scenario

**Objective:** Apply JavaScript concepts to a real-world restaurant order management system.

- **Files:** `orders.js`, `main.js`, `instruksi.md`, `package.json`
- **Task:** Implement functions for managing restaurant orders.
- **Features:**
  - Add orders
  - Update order status
  - Calculate total revenue
  - Delete orders

## Running the Code

For modules with `package.json`, you can run the code using:

```bash
node main.js
```

For testing modules:

```bash
npm test
```

## Technologies Used

- JavaScript (ES6+)
- Node.js built-in modules (`node:test`, `node:assert`)
- ES6 Modules

## Project Structure

```
Belajar-Dasar-Pemrograman-JavaScript/
├── .git/
├── .gitignore
├── final-assessment.zip
├── README.md
├── 01-writing-comments/
│   ├── index.js
│   └── instruksi.md
├── 02-code-style/
│   ├── index.js
│   └── instruksi.md
├── 03-writing-test/
│   ├── index.js
│   ├── index.test.js
│   ├── instruksi.md
│   └── package.json
├── optional-04-oop/
│   ├── Item.js
│   ├── Inventory.js
│   ├── main.js
│   ├── instruksi.md
│   └── package.json
├── optional-05-recursive/
│   ├── factorial.js
│   ├── fibonacci.js
│   ├── main.js
│   ├── instruksi.md
│   └── package.json
├── optional-06-full-coverage-testing/
│   ├── index.js
│   ├── index.test.js
│   ├── instruksi.md
│   └── package.json
└── optional-07-real-world-scenario/
    ├── orders.js
    ├── main.js
    ├── instruksi.md
    └── package.json
```

## Learning Outcomes

By completing these assignments, you'll gain proficiency in:

- Writing clean, well-commented JavaScript code
- Following consistent coding styles
- Unit testing with Node.js
- Object-oriented programming in JavaScript
- Recursive programming
- Applying JavaScript to real-world scenarios

## License

This project is part of a learning course and is not licensed for commercial use.

## Acknowledgments

- Dicoding Academy for providing the course materials and assignments
- All the instructors and mentors who contributed to the course content
