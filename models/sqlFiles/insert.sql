
-- users (students)
INSERT INTO users (user_id, name, password, email)
  VALUES (1,'Ariana Garcia', md5('ari12'), 'ariana.garcia@smail.astate.edu'), (2,'Samuel Reagan', md5('sammy'), 'samuel.reagan@smail.astate.edu'),
		 (3,'Blake Poush', md5('blake10'), 'blake.poush@smail.astate.edu'),(4,'Hunter Ingle', md5('hingle'), 'hunter.ingle@smail.astate.edu'),
         (5,'Andrew Lee', md5('lee13'), 'andrew.lee@smail.astate.edu'), (6,'Thomas Green', md5('green23'), 'thomas.green@smail.astate.edu');
         

-- users (instructors)
INSERT INTO users (user_id, name, password, email)
  VALUES (13,'Joel Adams', md5('adams11'), 'joel.adams@astate.edu'), (14,'Sandy Moore', md5('moore12'), 'sandy.moore@astate.edu'),
		 (15,'Noah Williams', md5('noah11'), 'noah.williams@astate.edu'), (16,'Ryan Scott', md5('scott12'), 'ryan.scott@astate.edu'),
         (17,'Isaac Green', md5('green13'), 'isaac.green@astate.edu');
 
 -- users (GA) 
INSERT INTO users (user_id, name, password, email)
  VALUES (7,'Kimi Lee', md5('lee43'), 'kimi.lee@smail.astate.edu'), (8,'Grace Bill', md5('grace24'), 'grace.bill@smail.astate.edu'),
         (9,'Jamie Webb', md5('web73'), 'jamie.webb@smail.astate.edu'), (10,'Rodney Smith', md5('rod34'), 'rodney.smith@smail.astate.edu'),
         (11,'Samantha Moore', md5('sam24'), 'samantha.moore@smail.astate.edu'), (12,'Clay Tucker', md5('tucker23'), 'clay.tucker@smail.astate.edu'),
		 (18,'Aaron Adams', md5('aaron11'), 'aaron.adams.smith@smail.astate.edu'), (19,'Lucy Smith', md5('smith13'), 'lucy.smith@smail.astate.edu'),
         (20,'Jack Hill', md5('jack12'), 'jack.hill@astate.edu');

-- students (users 1-6)
INSERT INTO student (user_id, student_id)
  VALUES (1, 50456), (2, 50457), (3, 50458), (4, 50459), (5, 50460), (6, 50461);

-- instructors (users 13 - 17)
INSERT INTO instructor (user_id, instructor_id)
  VALUES (13, 50468), (14, 50469), (15, 50470), (16, 50471), (17, 50472);

-- GA (users 18 -20 7-12)
INSERT INTO GA (user_id, ga_id)
  VALUES (18, 50473), (19, 50474), (20, 50475), (7, 50462), (8, 50463), (9, 50464), (10, 50465), (11, 50466), (12, 50467);
       
-- notes 
INSERT INTO notes (note_id, name, description, filePath)
	   VALUES -- Structured Programming
			  (1,'class machine IP: 147.97.156.244', '147.97.156.244', null),
			  (2,'Notes 1', 'An Introduction to C++.',''), 
			  (3,'Notes 2', 'I/O (Input/Output)',''),
              (4,'Exam 1 Review', 'exam 1 review',''),
              
              -- OOP
              (5,'class machine IP: 147.97.156.231', '147.97.156.231', null),
              (6,'Lecture 1','Pointers, dynamic memory allocation', ''),
              (7,'Lecture 2','Classes and Objects', ''),
              (8,'Lecture 3','Singly-Linked List', ''),
              
              -- ADV data structures
              (9,'class machine IP: 147.97.156.289', '147.97.156.289', null),
              (10,'Lecture 1','Skip List', ''),
              (11,'Lecture 1','AVL Tree', ''),
              
              -- Programming Languages
              (12,'Language Snapshot:', 'C#', ''),
              (13,'Language Snapshot:', 'Ruby', ''),
              (14,'Read', 'Read chapters 1 and 2.', null),
              
              -- Operating Systems
              (15,'class machine IP: 147.97.156.200', '147.97.156.200', null),
              (16,'Lecture 1','Processes', ''),
              (17,'Lecture 2','Thread: Multicore Programming, Multithreading Models', ''),
              
              -- Java App dev
              (18,'class machine IP: 147.97.156.236', '147.97.156.236', null),
              (19,'Homepage on class machine', 'set up your homepage instruction',''),
              (20,'Nucor', 'Nucor will visit us April 20',null),
              (21,'project', 'project requirement',''),
              
              -- Computer Networks
              (22,'class machine IP: 147.97.156.246', '147.97.156.246', null),
              (23,'Lecture 1', 'Lecture 1',''),
              (24,'Exam 1 Review', 'exam 1 review',''),
              (25,'Mock exam', 'mock exam 1',''),
              
              -- Computer Graphics
              (26,'PDF1', 'Line clipping',''),
              (27,'PDF2', 'Polygon clipping',''),
              (28,'PDF3', 'Mapping',''),
              
              -- Mobile App dev
              (29,'Note 1', 'Model-View-Controller and User Interfaces',''),
              (30,'Note 2', 'Building Controls',''),
              (31,'Note 3', 'Testing and Debugging Mobile Apps',''),
              
              -- Automata Theory
              (32,'Chapter 1', 'Introduction to finite state machines',''),
              (33,'Chapter 2', 'Context-free languages, grammars and ambiguity',''),
              (34,'Review Day', 'Review Day for Final April 27',null);
       
       
INSERT INTO assignments (assignment_id, title, type, details, filePath, maxPoints, dueDate, dueTime)
	   VALUES -- Structured Programming
			  (1,'Homework 1', 'hw','I/O (Input/Output)', '', 25, '2019-04-6', '24:00:00'),
              (2,'Homework 2', 'hw','Selection', '', 100, '2019-04-15', '24:00:00'),
              (3,'Test 1', 'test','test over chapters 1-3', null, 100, '2019-04-20', '12:30:00'),
              
              -- OOP
              (4,'Homework 1', 'hw','Singly-Linked List', '', 25, '2019-04-6', '24:00:00'),
              (5,'Quiz 1', 'quiz','Inheritance', null, 10, '2019-04-7', '2:30:00'),
              (6,'Exam 1', 'exam','Exam on April 16', null, 100, '2019-04-16', '2:30:00'),
              
              -- ADV data structures
              (7,'Quiz 1', 'quiz','Quiz: skip list', null, 10, '2019-04-5', '1:30:00'),
              (8,'Homework 1', 'hw','implement skip list', '', 25, '2019-04-8', '24:00:00'),
              (9,'Exam 1', 'exam','Exam on April 20', null, 100, '2019-04-20', '1:30:00'),
              
              -- Programming Languages
              (10,'Assignment 1', 'hw','Review Questions Chapter 1: 1,2,7,8,13,14,15,17,23;', null, 25, '2019-04-5', '24:00:00'),
              (11,'Assignment 2', 'hw','Review Questions Chapter 2: 3,7,12,15,18,25,26,27,30,31,35;', null, 25, '2019-04-8', '24:00:00'),
              (12,'Exam 1', 'exam','Exam on April 10', null, 100, '2019-04-10', '1:00:00'),
              
              -- Operating Systems
              (13,'Assignment 1', 'hw','Review Questions', null, 25, '2019-04-7', '24:00:00'),
              (14,'Exam 1', 'exam','Exam on April 10', null, 100, '2019-04-10', '3:00:00'),
              
              -- Java App dev
			  (15,'Homework 1', 'hw_quiz',null, '', 30, '2019-04-20', '22:00:00'),
              (16,'Quiz 1', 'hw_quiz','Quiz on April 21', null, 5, '2019-04-21', '12:30:00'),
			  (17,'Exam 1', 'exam','Exam on April 23', null, 100, '2019-04-23', '12:30:00'),
              
              -- Computer Networks
			  (18,'Homework 1', 'hw','Implement Echo & Time Server over TCP', null, 100, '2019-04-19', '22:00:00'),
              (19,'Homework 2', 'hw','Local DNS server over UDP', null, 100, '2019-04-22', '22:00:00'),
              (20,'Exam 1', 'exam','Exam on April 23', null, 100, '2019-04-23', '8:00:00'),
       
			  -- Computer Graphics
			  (21,'01 a: Line pixel error', 'homework','Read (x,y) for two points from keyboard; display initial error, delta error for increments 
				and for no increments. Then loop to display (x, y) and associated error for each pixel between the two points.
				(See pdf for example display.)', null, 25, '2019-04-16', '24:00:00'),
			  (22,'01 b: line with dx > 0, dy > 0, dx > dy', 'homework','Get two endpoints with dx > 0, dy > 0, and dx > dy; print same table as 01 a 
				and generate associated picture. Assume "500x500.bmp" in same directory.', null, 25, '2019-04-17', '24:00:00'),
			  (23,'01 c: line with dx > 0, dy > 0 and dy > dx', 'homework','Get two endpoints with dx > 0, dy > 0, and dx < dy; print same table as 01
				a and generate associated picture. Assume "500x500.bmp" in same directory.', null, 25, '2019-04-18', '24:00:00'),
			  (24,'01 d: all 16 possible lines', 'homework','Get start point from user and draw in 16 directions, +/- 100 and +/- 50. Assume "500x500.bmp"
				in current directory.', null, 25, '2019-04-18', '24:00:00'),
			  (25,'02 a: circle pixel error', 'Homework', 'Read (x,y) for center point and radius from keyboard; display initial error. Then loop to display (x, y), 
				delta error and associated error for each pixel between the two points. (See pdf for example display.)', null, 25, '2019-04-19', '24:00:00'),
				
               -- Mobile App dev 
			  (26,'Meeting 1', 'meeting','Review over App Design', null, 100, '2019-04-18', '9:30:00'),
			  (27,'Meeting 2', 'meeting','Discuss your progress with your app.', null, 100, '2019-04-20', '10:00:00'),
			  (28,'Presentation', 'presentation','Presentation', null, 100, '2019-04-29', '9:30:00'),
              
              -- Automata Theory
              (29,'Exam 1', 'exam','Exam on April 15', null, 100, '2019-04-15', '9:00:00'),
			  (30,'Final Exam', 'hw','Final Exam on April 30', null, 100, '2019-04-30', '9:00:00');
       
       
-- courses
INSERT INTO courses (course_id, name, shortName)
  VALUES (2114,'CS 2114: Structured Programming & lab','Structured Programming'),
		 (2124,'CS 2124: OOP & Fund Data Structures & lab','OOP & Fund Data Structures'),
         (3113,'CS 3113: Algorithms & Adv Data Structures','Algorithms & Adv Data Structures'),
         (3123,'CS 3123: Programming Languages', 'Programming Languages'), 
		 (3233,'CS 3233: Operating Systems','Operating Systems'),
         (4143,'CS 4143: Java Application Development','Java Application Development'),
         (4313,'CS 4/5313: Computer Networks','Computer Networks'),
         (4413,'CS 4/5413: Fundamental Computer Graphics','Fundamental Computer Graphics'),
         (4613,'CS 4/5613: Mobile Application Development','Mobile Application Development'),
         (4723,'CS 4/5723: Automata Theory','Machine Learning');

-- instructor of each course
INSERT INTO teaches (course_id, instructor_id)
	   VALUES (2114, 13), -- instructor 13 () teaches structured programming
			  (2124, 13), -- instructor 13 () teaches OOP
              (3113, 14), -- instructor 14 () teaches Algorithms and adv data structures
              (3123, 15), -- instructor 15 () teaches programming languages
              (3233, 16), -- instructor 16 () teaches operating systems
              (4143, 17), -- instructor 17 () teaches java app dev
              (4313, 16), -- instructor 16 () teaches computer networks
              (4413, 14), -- instructor 14 () teaches Fundamental comp graphics
              (4613, 15), -- instructor 15 () teaches Mobile app dev
              (4723, 15); -- instructor 15 () Automata Theory
              
-- ga of each course
INSERT INTO assistant (course_id, ga_id)
	   VALUES (2114, 18), -- ga 18 () structured programming
			  (2124, 19), -- ga 19 () OOP
              (3113, 20), -- ga 20 () Algorithms and adv data structures
              (3123, 7),  -- ga 7  () programming languages
              (3233, 8),  -- ga 8  () operating systems
              (4143, 9),  -- ga 9  () java app dev
              (4313, 10), -- ga 10 () computer networks
              (4413, 11), -- ga 11 () Fundamental comp graphics
              (4613, 12), -- ga 12 () Mobile app dev
              (4723, 18); -- ga 18 () Automata Theory
       

-- student classes         
INSERT INTO enrolled(course_id, student_id) 
	   VALUES (4143,1), (4313,1), (4413,1), (4723,1),   			-- student 1 () is enrolled in Java App Dev, computer Networks, fund. comp. graphics, Automata Theory 
              (4613,2), (4143,2), (4313, 2), (4413, 2),             -- student 2 () is enrolled in Mobile App Dev., Java App Dev, Computer Networks, Fund. comp. graphics
              (2124,3), (3113,3), (3123,3), (3233, 3), (4613,3),	-- student 3 () is enrolled in OOP, Algorithms and Adv Data Structures, programming languages, operating systems, mobile app dev
			  (4723,4), (4313,4), (4413,4), (4143, 4),				-- student 4 () is enrolled in Automata Theory, computer networks, Fund. comp. graphics, Java App Dev
			  (2124,5), (3113, 5),(3123,5), (3233,5), (4413, 5), 	-- student 5 () is enrolled in OOP, algorithms and Adv data structures, programming languages, operating systems, fund. comp. graphics
              (2114, 6);                                            -- student 6 () is enrolled in structured programming 
              
              
-- course notes              
INSERT INTO course_notes (note_id, course_id)
	   VALUES (1, 2114), (2, 2114), (3, 2114), (4, 2114),
			  (5, 2124), (6, 2124), (7, 2124), (8, 2124),
              (9, 3113), (10, 3113), (11, 3113),
              (12, 3123), (13, 3123), (14, 3123),
              (15, 3233), (16, 3233), (17, 3233),
              (18, 4143), (19, 4143), (20, 4143), (21, 4143),
              (22, 4313), (23, 4313), (24, 4313), (25, 4313),
              (26, 4413), (27, 4413), (28, 4413),
              (29, 4613), (30, 4613), (31, 4613),
              (32, 4723), (33, 4723), (34, 4723);
       
-- course assignments       
INSERT INTO course_assignments(assignment_id, course_id)
	   VALUES (1, 2114), (2, 2114), (3, 2114),
			  (4, 2124), (5, 2124), (6, 2124),
              (7, 3113), (8, 3113), (9, 3113),
              (10, 3123), (11, 3123), (12, 3123),
              (13, 3233), (14, 3233), 
              (15, 4143), (16, 4143), (17, 4143),
              (18, 4313), (19, 4313), (20, 4313),
              (21, 4413), (22, 4413), (23, 4413), (24, 4413), (25, 4413),
              (26, 4613), (27, 4613), (28, 4613),
              (29, 4723), (30, 4723);
              
INSERT INTO GA_create_note(note_id, GA_id)
	   VALUES 
              (10, 20), 
              (13, 7), 
              (22, 10), (23, 10),
              (30, 12),
              (33, 18);
       
INSERT INTO instructor_create_note(note_id, instructor_id)
	   VALUES (1, 13), (2, 13), (3, 13), (4, 13),
			  (5, 13), (6, 13), (7, 13), (8, 13),
              (9, 14), (11, 14),
              (12, 15),(14, 15),
              (15, 16), (16, 16), (17, 16),
              (18, 17), (19, 17), (20, 17), (21, 17),
              (24, 16), (25, 16),
              (26, 14), (27, 14), (28, 14),
              (29, 15), (31, 15),
              (32, 15), (34, 15);

INSERT INTO GA_create_assignment(assignment_id, GA_id)
	   VALUES (1, 18), (2, 18), (3, 18),
              (17, 9),
              (18, 10),
              (21, 11), (22, 11);
              
       
INSERT INTO instructor_create_assignment(assignment_id, instructor_id)
	   VALUES 
			  (4, 13), (5, 13), (6, 13),
              (7, 14), (8, 14), (9, 14),
              (10, 15), (11, 15), (12, 15),
              (13, 16), (14, 16), 
              (15, 17), (16, 17),
              (19, 16), (20, 16),
              (23, 14), (24, 14), (25, 14),
              (26, 15), (27, 15), (28, 15),
              (29, 15), (30, 15);
              
-- Grades
              
