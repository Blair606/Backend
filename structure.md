pwani-elearning/
├── .env
├── .gitignore
├── package.json
├── README.md
├── src/
│   ├── app.js                  # Express app setup
│   ├── config/
│   │   ├── database.js         # MongoDB connection
│   │   ├── multer.js           # File upload configuration
│   │   └── constants.js        # App constants
│   │
│   ├── models/
│   │   ├── user/
│   │   │   ├── user.model.js
│   │   │   ├── student.model.js
│   │   │   ├── lecturer.model.js
│   │   │   └── parent.model.js
│   │   │
│   │   ├── academic/
│   │   │   ├── department.model.js
│   │   │   ├── course.model.js
│   │   │   └── courseEnrollment.model.js
│   │   │
│   │   ├── content/
│   │   │   └── courseContent.model.js
│   │   │
│   │   ├── assessment/
│   │   │   ├── assignment.model.js
│   │   │   ├── assignmentSubmission.model.js
│   │   │   ├── quiz.model.js
│   │   │   ├── quizQuestion.model.js
│   │   │   ├── quizAnswer.model.js
│   │   │   └── studentQuizAttempt.model.js
│   │   │
│   │   ├── financial/
│   │   │   └── feesPayment.model.js
│   │   │
│   │   └── communication/
│   │       ├── notification.model.js
│   │       ├── discussion.model.js
│   │       └── discussionReply.model.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── student.controller.js
│   │   ├── lecturer.controller.js
│   │   ├── parent.controller.js
│   │   ├── department.controller.js
│   │   ├── course.controller.js
│   │   ├── content.controller.js
│   │   ├── assignment.controller.js
│   │   ├── quiz.controller.js
│   │   ├── payment.controller.js
│   │   ├── notification.controller.js
│   │   └── discussion.controller.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── student.routes.js
│   │   ├── lecturer.routes.js
│   │   ├── parent.routes.js
│   │   ├── department.routes.js
│   │   ├── course.routes.js
│   │   ├── content.routes.js
│   │   ├── assignment.routes.js
│   │   ├── quiz.routes.js
│   │   ├── payment.routes.js
│   │   ├── notification.routes.js
│   │   └── discussion.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js      # Authentication middleware
│   │   ├── role.middleware.js      # Role-based access control
│   │   ├── upload.middleware.js    # File upload middleware
│   │   ├── error.middleware.js     # Error handling
│   │   └── validate.middleware.js  # Request validation
│   │
│   ├── services/
│   │   ├── email.service.js
│   │   ├── notification.service.js
│   │   ├── payment.service.js
│   │   └── file.service.js
│   │
│   ├── utils/
│   │   ├── apiResponse.js          # Response formatter
│   │   ├── validators.js           # Input validation helpers
│   │   ├── logger.js               # Logging utility
│   │   └── helpers.js              # General helper functions
│   │
│   └── tests/
│       ├── unit/
│       │   └── models/
│       └── integration/
│           └── api/
│
├── uploads/                        # File upload directory
│   ├── profiles/
│   ├── course_contents/
│   ├── assignments/
│   ├── submissions/
│   └── payment_proofs/
│
└── logs/                          # Application logs