Here's a high-level overview of the models needed for the Pwani University E-Learning Platform without code:
User Models
User (Base user model)
Basic authentication fields
Role flags (student, lecturer, parent, admin)
Profile information
Student
Link to base user
Registration number
Department reference
Parent reference
Current semester
Lecturer
Link to base user
Staff ID
Department reference
Specialization
Parent
Link to base user
National ID
Relationship type
Academic Structure Models
Department
Name
Code
Description
Course
Course code
Title
Description
Department reference
Lecturer reference
Credit hours
CourseEnrollment
Student reference
Course reference
Enrollment date
Status
Content Models
CourseContent
Course reference
Title
Content type (video, PDF, link, text)
Content/file
Timestamps
Assessment Models
Assignment
Course reference
Title
Description
Due date
Total marks
Attachments
AssignmentSubmission
Assignment reference
Student reference
Submission file
Submission date
Marks
Feedback
Quiz
Course reference
Title
Description
Time limit
Due date
Total marks
QuizQuestion
Quiz reference
Question type
Question text
Marks
QuizAnswer
Question reference
Answer text
Correctness flag
StudentQuizAttempt
Student reference
Quiz reference
Start/end times
Score
Financial Models
FeesPayment
Student reference
Amount
Payment date
Payment method
Transaction ID
Status
Payment proof
Communication Models
Notification
User reference
Title
Message
Type
Timestamp
Read status
Discussion
Course reference
Title
Content
Creator reference
Timestamp
DiscussionReply
Discussion reference
Content
Creator reference
Timestamp