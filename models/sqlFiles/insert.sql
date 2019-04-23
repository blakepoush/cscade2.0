
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
       
       
INSERT INTO assignments (assignment_id, title, type, details, filePath, maxPoints, dueDate)
	   VALUES -- Structured Programming
			        (1,'Homework 1', 1,'I/O (Input/Output)', '', 25, '2019-04-6 01:00:00'),
              (2,'Homework 2', 1,'Selection', '', 100, '2019-04-15'),
              (3,'Test 1', 2,'test over chapters 1-3', null, 100, '2019-04-20'),
              
              -- OOP
              (4,'Homework 1', 1,'Singly-Linked List', '', 25, '2019-05-6 01:00:00'),
              (5,'Quiz 1', 3,'Inheritance', null, 10, '2019-05-7'),
              (6,'Exam 1', 2,'Exam on April 16', null, 100, '2019-04-16'),
              
              -- ADV data structures
              (7,'Quiz 1', 3,'Quiz: skip list', null, 10, '2019-04-5'),
              (8,'Homework 1', 1,'implement skip list', '', 25, '2019-04-8 01:00:00'),
              (9,'Exam 1', 2,'Exam on April 20', null, 100, '2019-04-20'),
              
              -- Programming Languages
              (10,'Assignment 1', 1,'Review Questions Chapter 1: 1,2,7,8,13,14,15,17,23;', null, 25, '2019-04-5'),
              (11,'Assignment 2', 1,'Review Questions Chapter 2: 3,7,12,15,18,25,26,27,30,31,35;', null, 25, '2019-04-8'),
              (12,'Exam 1', 2,'Exam on April 10', null, 100, '2019-04-10'),
              
              -- Operating Systems
              (13,'Assignment 1', 1,'Review Questions', null, 25, '2019-04-7'),
              (14,'Exam 1', 2,'Exam on April 10', null, 100, '2019-04-10'),
              
              -- Java App dev
			        (15,'Homework 1', 1,null, null, 30, '2019-02-15 01:00:00'),
              (31, 'Homework 2', 1, 'Strategy Pattern','/uploads/assignmentMaterials/4143/hw2_material.docx', 30,'2019-02-26 01:00:00' ),
              (16,'Quiz 1', 3,'Quiz on March 1', null, 5, '2019-03-01 12:30:00'),
              (17,'Exam 1', 2,'Exam on March 6', null, 100, '2019-03-06 12:30:00'),
              (32, 'Homework 3', 1, 'Observer Pattern','/assignmentMaterials/4143/hw3_material.docx', 30,'2019-03-15 01:00:00' ),
              (45, 'Homework 4', 1, 'Adaptor','/assignmentMaterials/4143/hw4_material.docx', 25,'2019-03-26 01:00:00' ),
              (46,'Quiz 2', 3,'Quiz on March 26', null, 5, '2019-03-26 12:30:00'),
			        (47,'Exam 2', 2,'Exam on April 1', null, 100, '2019-04-01 12:30:00'),
              (48,'Quiz 3', 3,'Quiz on April 15', null, 5, '2019-04-15 12:30:00'),
              (49,'Exam 3', 2,'Exam on April 25', null, 100, '2019-04-25 12:30:00'),
              (50, 'Homework 5', 1, 'Decorator','/assignmentMaterials/4143/hw5_material.docx', 25,'2019-04-26 01:00:00' ),

              
              -- Computer Networks
			        (18,'Homework 1', 1,'Implement Echo & Time Server over TCP', null, 100, '2019-03-9 01:00:00'),
              (19,'Homework 2', 1,'Local DNS server over UDP', null, 100, '2019-03-15 01:00:00'),
              (33,'Homework 3', 1,'FTP over TCP', null, 100, '2019-03-19 01:00:00'),
              (20,'Exam 1', 2,'Exam on March 23', null, 100, '2019-03-23 08:00:00'),
              (51,'Homework 4', 1,'Review Questions ch 4', null, 100, '2019-04-6 01:00:00'),
              (52,'Homework 5', 1,'Review Questions ch 5', null, 100, '2019-04-15 01:00:00'),
              (53,'Homework 6', 1,'Review Questions ch 6', null, 100, '2019-04-17 01:00:00'),
              (54,'Exam 2', 2,'Exam on April 18', null, 100, '2019-04-18 08:00:00'),
              (55,'Homework 7', 1,'Review Questions ch 8', null, 100, '2019-04-21 01:00:00'),
              (56,'Homework 8', 1,'Review Questions ch 9', null, 100, '2019-04-25 01:00:00'),
              (57,'Exam 3', 2,'Exam on April 27', null, 100, '2019-04-27 08:00:00'),


       
			  -- Computer Graphics
			  (21,'01 a: Line pixel error', 1,'Read (x,y) for two points from keyboard; display initial error, delta error for increments 
				and for no increments. Then loop to display (x, y) and associated error for each pixel between the two points.
				(See pdf for example display.)', null, 25, '2019-04-12 01:00:00'),
			  (22,'01 b: line with dx > 0, dy > 0, dx > dy', 1,'Get two endpoints with dx > 0, dy > 0, and dx > dy; print same table as 01 a 
				and generate associated picture. Assume "500x500.bmp" in same directory.', null, 25, '2019-04-13 01:00:00'),
			  (23,'01 c: line with dx > 0, dy > 0 and dy > dx', 1,'Get two endpoints with dx > 0, dy > 0, and dx < dy; print same table as 01
				a and generate associated picture. Assume "500x500.bmp" in same directory.', null, 25, '2019-04-14 01:00:00'),
			  (24,'01 d: all 16 possible lines', 1,'Get start point from user and draw in 16 directions, +/- 100 and +/- 50. Assume "500x500.bmp"
				in current directory.', null, 25, '2019-04-15 01:00:00'),
			  (25,'02 a: circle pixel error', 1, 'Read (x,y) for center point and radius from keyboard; display initial error. Then loop to display (x, y), 
				delta error and associated error for each pixel between the two points. (See pdf for example display.)', null, 25, '2019-04-16 01:00:00'),
				(34,'Exam 1', 2,'Exam on April 12', null, 100, '2019-04-12 14:00:00'),
        (58,'Edge List', 1,'Build PolygonEdge List', null, 25, '2019-04-17 14:00:00'),
        (59,'AEL', 1,'Build Active Edge List', null, 25, '2019-04-18 14:00:00'),
        (60,'Clipping', 1,'Line Clipping and Polygon Clipping algorithm', null, 25, '2019-04-20 14:00:00'),
        (35,'Exam 2', 2,'Exam on April 20', null, 100, '2019-04-20 14:00:00'),
        (61,'Polygon Fill', 1,'Polygon fill algorithm', null, 25, '2019-04-21 14:00:00'),
        (62,'z buffer', 1,'Z buffer calculations', null, 25, '2019-04-24 14:00:00'),
        (63,'Exam 3', 2,'Exam on April 27', null, 100, '2019-04-27 14:00:00'),

               -- Mobile App dev 
			  (26,'Meeting 1', 4,'Review over App Design', null, 100, '2019-03-5 10:00:00'),
			  (27,'Meeting 2', 4,'Discuss your progress with your app.', null, 100, '2019-03-20 10:00:00'),
			  (28,'Presentation', 5,'Presentation', null, 100, '2019-03-29 10:00:00'),
        (64,'Meeting 3', 4,'Discuss your progress.', null, 100, '2019-04-5 10:00:00'),
			  (65,'Meeting 4', 4,'Discuss your progress.', null, 100, '2019-04-20 10:00:00'),
        (66,'Presentation', 5,'Presentation', null, 100, '2019-04-29 10:00:00'),
              
              -- Automata Theory
              (29,'Exam 1', 2,'Exam on March 15', null, 100, '2019-03-08 11:00:00'),
              (37,'Homework 1', 1,'DFA', null, 50, '2019-03-15 01:00:00'),
              (39,'Homework 2', 1,'NFA', null, 50, '2019-03-20 01:00:00'),
              (40,'Homework 3', 1,'Grammar', null, 50, '2019-03-26 01:00:00'),
              (38,'Exam 2', 2,'Exam on April 1', null, 100, '2019-04-1 11:00:00'),
              (36,'Homework 4', 1,'Finite State', null, 50, '2019-04-12 01:00:00'),
              (41,'Homework 5', 1,'Automata Theory Questions', null, 50, '2019-04-20 01:00:00'),
              (42,'Homework 6', 1,'Finite State Questions ', null, 30, '2019-04-24 01:00:00'),
              (43,'Exam 3', 2,'Exam on April 19', null, 100, '2019-04-19 11:00:00'),
              (44,'Exam 4', 2,'Exam on April 26', null, 100, '2019-04-26 11:00:00'),
			        (30,'Final Exam', 3,'Final Exam on April 30', null, 100, '2019-04-30 11:00:00');
       
       
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
	   VALUES (4143,1), (4313,1), (4413,1), (4723,1), (4613,1),   		          	-- student 1 () is enrolled in Java App Dev, computer Networks, fund. comp. graphics, Automata Theory 
              (4613,2), (4143,2), (4313, 2), (4413, 2),                     -- student 2 () is enrolled in Mobile App Dev., Java App Dev, Computer Networks, Fund. comp. graphics
              (2124,3), (3113,3), (3123,3), (3233, 3), (4613,3),	    -- student 3 () is enrolled in OOP, Algorithms and Adv Data Structures, programming languages, operating systems, mobile app dev
			        (4723,4), (4313,4), (4413,4), (4143, 4),				              -- student 4 () is enrolled in Automata Theory, computer networks, Fund. comp. graphics, Java App Dev
			        (2124,5), (3113, 5),(3123,5), (3233,5), (4413, 5),    	-- student 5 () is enrolled in OOP, algorithms and Adv data structures, programming languages, operating systems, fund. comp. graphics
              (2114, 6);                                                                    -- student 6 () is enrolled in structured programming 
              
              
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
              (15, 4143), (16, 4143), (17, 4143), (31, 4143), (32, 4143), (45, 4143), (46, 4143), (47, 4143), (48, 4143), (49, 4143), (50, 4143),
              (18, 4313), (19, 4313), (20, 4313), (33, 4313), (51, 4313), (52, 4313), (53, 4313), (54, 4313), (55, 4313), (56, 4313), (57, 4313),
              (21, 4413), (22, 4413), (23, 4413), (24, 4413), (25, 4413), (34, 4413), (35, 4413),  (58, 4413),  (59, 4413),  (60, 4413),  (61, 4413),  (62, 4413),  (63, 4413), 
              (26, 4613), (27, 4613), (28, 4613), (64, 4613), (65, 4613), (66, 4613),
              (29, 4723), (30, 4723), (36, 4723), (37, 4723), (38, 4723), (39, 4723), (40, 4723), (41, 4723), (42, 4723), (43, 4723), (44, 4723) ;
              
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
          
-- submitted assignments
INSERT INTO submitted_assignments(student_id, assignment_id, assignment_filePath, grade, feedBack, feedBack_filepath)
      VALUES -- assignments for student 1
                      (1,15,null,25,'Good Job!', null), (1,18,null, 100, 'Good Job!', null), (1, 21, null, 25, null, null), (1, 29, null, 90, 'Good!', null),
                      (1, 16, null, 5, null, null), (1, 17, null, 95, null, null), (1, 32, null, 25, null, null),   (1,31,null,29,null, null), (1,33,null,80,null, null),  (1,22,null,25,null, null), 
                      (1,23,null,25,null, null),  (1,24,null,24,null, null),  (1,25,null,23,null, null),  (1,34,null,80,null, null),  (1,35,null,90,'Good Job!', null),
                      (1,26,null,90,'Good!', null),   (1,27,null,80,null, null),  (1,28,null,100,'Great Job!', null), (1,36,null,40,null, null),  (1,38,null,80,'', null),  (1,39,null,35,null, null),
                      (1,40,null,45,null, null), (1,41,null,50,null, null), (1,43,null,80,null, null),  (1,45,null,25,null, null), (1,46,null,3,null, null), (1,47,null,90,null, null), 
                      (1,48,null,4,null, null), (1,51,null,80,null, null),(1,52,null,90,null, null),(1,53,null,85,null, null),(1,54,null,85,null, null),(1,55,null,95,null, null),
                      (1,58,null,24,null, null),(1,59,null,25,null, null),(1,60,null,23,null, null),(1,61,null,20,null, null),(1,64,null,85,null, null),(1,65,null,95,null, null),
                      (1,19,null,90,null, null), (1,20,null,95,null, null),  (1,37,null,45,null, null),
                    -- assignments for student 2
                      (2, 26, null, 90, null, null), (2, 15, null, 30, null, null), (2, 18, null, 95, null, null), (2, 21, null, 25, null, null),

                    -- assignments for student 3
                      (3, 4, null, 24, null, null), (3, 5, null, 10, null, null), (3, 7, null, 9, null, null), (3, 8, null, 20, null, null), (3, 10, null, 25, null, null), (3, 11, null, 25, null, null),
                      (3, 12, null, 95, null, null), (3, 13, null, 23, null, null), (3, 14, null, 90, null, null), (3, 26, null, 95, null, null),

                    -- assignments for student 4
                      (4, 29, null, 100, null, null), (4, 18, null, 95, null, null), (4, 21, null, 25, null, null), (4, 15, null, 25, null, null);
-- Grades
INSERT INTO course_assignment_types(type_id, course_id, type, weight)
      VALUES (1, 2114, 'homework', 25),  (2, 2114,'Exam', 30),  (3, 2114,'Attendance', 15),  (4, 2114,'Final Exam', 30),                                  -- weights for structured programming
                    (1, 2124, 'homework', 25),  (2, 2124,'Exam', 25), (3, 2124,'Quiz', 10), (4, 2124,'Attendance', 10),  (5, 2124,'Final Exam', 30),  -- weights for OOP
                    (1, 3113, 'homework', 25),  (2, 3113,'Exam', 20), (3, 3113,'Quiz', 10), (4, 3113,'Attendance', 15),  (5, 3113,'Final Exam', 30),  -- weights for adv data structures
                    (1, 3123, 'homework', 35),  (2, 3123,'Exam', 25), (3, 3123,'Attendance', 10),  (4, 3123,'Final Exam', 30),                                 -- weights for programming languages
                    (1, 3233, 'homework', 25),  (2, 3233,'Exam', 30), (3, 3233,'Attendance', 15),  (4, 3233,'Final Exam', 30),                                 -- weights for Operating Systems
                    (1, 4143, 'homework', 25),  (2, 4143,'Exam', 25), (3, 4143,'Quiz', 10), (4, 4143,'Attendance', 10),  (5, 4143,'Final Exam', 30), -- weights for Java app
                    (1, 4313, 'homework', 25),  (2, 4313,'Exam', 30), (3, 4313,'Attendance', 15),  (4, 4313,'Final Exam', 30),                                 -- weights for computer networks
                    (1, 4413, 'homework', 25),  (2, 4413,'Exam', 30), (3, 4413,'Attendance', 15),  (4, 4413,'Final Exam', 30),                                 -- weights for computer graphics
                    (4, 4613, 'meeting', 75),  (5, 4613,'presentation', 25),                                                                                                                   -- weights for Mobile app
                    (1, 4723, 'homework', 25),(2, 4723, 'Exam', 30),  (3, 4723,'Final Exam', 30), (4, 4723,'Attendance', 15);                                  -- weights for Automata Theory


-- announcements
INSERT INTO announcements(id, title, body, dateExpired)
      VALUES  
      (1, 'ACM Meeting','The Association for Computing Machinery (ACM) student group will meet this
      Friday, April 26 at 12:00pm in CSM 211 during {code|friday}.
      Everyone is invited to attend.  Come participate in your CS student club!','2019-04-26' ),

      (2,'Internship Opportunity', 'Internship opportunity with Ritter Communications. If you are interested in this position, please email Dr. Su with your resume by April 25.', '2019-04-28');


-- useful links
INSERT INTO useful_links(name, link)
      VALUES ('Student Advising', 'https://wiki.cs.astate.edu/index.php/Student/Advising');
INSERT INTO useful_links(name, link)
      VALUES ('Astate CS Page', 'https://www.astate.edu/college/ecs/computer-science/');
INSERT INTO useful_links(name, link)
      VALUES ('Astate CS Wiki', 'https://wiki.cs.astate.edu/index.php/Main_Page');
INSERT INTO useful_links(name, link)
      VALUES ('C++ Reference', 'https://en.cppreference.com/w/');
INSERT INTO useful_links(name, link)
      VALUES ('Code Friday', 'https://codefriday.cs.astate.edu/challenge');
