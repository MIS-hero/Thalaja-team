# Stage 3: Technical Documentation

## Objectives
* Translate project objectives and requirements into a detailed technical plan.
* Define user stories and mockups to clarify functionality where applicable.
* Design and document architecture, components, classes, database structures, or collections as applicable.
* Create high-level sequence diagrams illustrating interactions between components or services.
* Specify external services (APIs) and define internal API endpoints with input and output formats.
* Plan source control management (SCM) and quality assurance (QA) strategies for code lifecycle and testing.
* Justify all technical decisions based on functional or non-functional requirements, constraints, or expert recommendations.

## Importance of Stage 3
This stage ensures that the team creates a comprehensive blueprint for building the MVP. By planning technical aspects, source control, and quality assurance in advance, the team reduces risks, improves clarity, and enhances the development process. The documentation also aligns all stakeholders on the project's technical direction.

## Tasks for Stage 3
* Define User Stories and Mockups
* Design System Architecture
* Define Components, Classes, and Database Design
* Create High-Level Sequence Diagrams
* Document External and Internal APIs
* Plan SCM and QA Strategies

## Deliverable: Technical Documentation
The final document should include:
1. User Stories and Mockups: Prioritized stories and mockups if applicable.
2. System Architecture: High-level diagram.
3. Components, Classes, and Database Design: ER diagram, database schema, or collection structure.
4. Sequence Diagrams: Illustrating key interactions.
5. API Specifications: External APIs and internal API endpoints.
6. SCM and QA Plans: Strategies for source control and testing.
7. Technical Justifications: Rationales for chosen technologies and designs.

## Tips for Success
* Adapt to the MVP: Include only what is relevant to your project 
* Collaborate Actively: Assign team members specific tasks, but ensure all documentation is reviewed collectively.
* Keep it Clear and Simple: Avoid overcomplicating diagrams or descriptions.

---

## Tasks

### 0. Define User Stories and Mockups

**Purpose:** To identify and prioritize the functionalities of the MVP from the user's perspective and visualize its interface when applicable.

**Instructions:**
* Write User Stories using the format:
    * "As a [user type], I want to [perform an action], so that [achieve a goal]."
    * Prioritize stories using MoSCoW (Must Have, Should Have, Could Have, Won't Have).
* If the MVP includes a user interface, create mockups for the main screens using tools like Figma, Balsamiq, or Adobe XD.
* For API-only projects, mockups are not necessary. Instead, focus on defining clear User Stories and API interactions.

**Example:** User Story:
* As a user, I want to receive real-time notifications for completed tasks, so that I can track my productivity effectively. Mockup: Create wireframes showing the notifications dashboard (if applicable).

**Deliverable Section:**
* List of prioritized User Stories.
* Mockups for main screens (if applicable).

**Resources:**

General Guides:
* Guide to Writing User Stories
* Wireframe vs. mock-up: what's the difference?

Figma:
* world's shortest Figma course
* Figma tutorial for Beginners: Complete Website from Start to Finish
* UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma

---

### 1. Design System Architecture

**Purpose:** To define how the MVP components interact and ensure scalability and efficiency.

**Instructions:**
* Create a high-level architecture diagram showing components such as front-end, back-end, databases, and external services.
* Specify how data flows between components using arrows and annotations.

**Example:** A web application architecture may include:
* Front-end: React.
* Back-end: Node.js and Express.
* Database: MongoDB or PostgreSQL.
* External APIs: OpenWeatherMap for weather data.

**Deliverable Section:**
* Diagram illustrating the architecture and data flow.

**Resources:**
* Architecture of a System
* System Architecture – Detailed Explanation

---

### 2. Define Components, Classes, and Database Design

**Purpose:** To detail the internal structure of the system components.

**Instructions:**
* For the back-end: List and define key classes with their attributes and methods.
* For the database:
    * If using a relational database, create an ER diagram or schema showing tables, attributes, and relationships.
    * If using a document-oriented database (e.g., MongoDB), define collections and the structure of stored documents. Specify mandatory fields and optional fields.
* For the front-end: Outline main UI components and their interactions.

**Example:**

Relational Database:
* expense table with columns for id, amount, category_id, date.

Document-Oriented Database: Collection: expenses
* Document: { "id": 1, "amount": 100, "category": "Food", "date": "2024-01-01" }

**Deliverable Section:**
* Component/Class descriptions.
* ER diagram, database schema, or collection structure.

**Resources:**
* Guide to UML Class Diagrams
* How to Design a Database For MVP?
* Entity Relationship Diagram (ERD) Tutorial - Part 1
* Entity Relationship Diagram (ERD) Tutorial - Part 2

---

### 3. Create High-Level Sequence Diagrams

**Purpose:** To show how components or services interact for key use cases.

**Instructions:**
* Identify 2-3 critical use cases (e.g., user logs in, retrieves data, saves a new record).
* Draw sequence diagrams showing interactions between components (e.g., front-end, back-end, database).

**Deliverable Section:**
* Sequence diagrams for key interactions.

**Resources:**
* Guide to Sequence Diagrams

---

### 4. Document External and Internal APIs

**Purpose:** To specify how the system interacts with external APIs and define its own API.

**Instructions:**
* List external APIs the project will use, explaining why they were chosen.
* For the project's API, define:
    * URL path.
    * HTTP method (GET, POST, etc.).
    * Input format (JSON or query parameters).
    * Output format (e.g., JSON structure).

**Deliverable Section:**
* List of external APIs.
* Table or detailed descriptions of internal API endpoints.

**Resources:**
* Guide to RESTful APIs
* REST API Best Practices – REST Endpoint Design Examples
* Good APIs Vs Bad APIs: 7 Tips for API Design
* API Design 101: From Basics to Best Practices
* API Documentation Best Practices – Full Course

---

### 5. Plan SCM and QA Strategies

**Purpose:** To establish procedures for managing code, the development lifecycle, and ensuring quality.

**Instructions:**
* Define SCM Processes:
    * Use Git or a similar tool for version control.
    * Establish branching strategies (e.g., main, development, feature branches).
    * Plan for regular commits, code reviews, and pull requests.
* Plan QA Processes:
    * Define a testing strategy (e.g., unit tests, integration tests).
    * Specify tools for testing (e.g., Jest, Postman).
    * Plan a deployment pipeline for staging and production environments.

**Example:**
* SCM: Feature branches for each task, with code reviewed before merging into the development branch.
* QA: Automated unit tests for API endpoints and manual testing for critical user flows.

**Deliverable Section:**
* SCM strategy (branching, code reviews).
* QA strategy (testing tools, types of tests).

**Resources:**
* Git Branching Strategies
* What is End-to-End Testing? - A Complete Guide

---

### 6. Deliverable: Technical Documentation

The final document should include (when applicable):
* User Stories and Mockups: Prioritized stories and mockups if applicable.
* System Architecture: High-level diagram.
* Components, Classes, and Database Design: ER diagram, database schema, or collection structure.
* Sequence Diagrams: Illustrating key interactions.
* API Specifications: External APIs and internal API endpoints.
* SCM and QA Plans: Strategies for source control and testing.
* Technical Justifications: Rationales for chosen technologies and designs.