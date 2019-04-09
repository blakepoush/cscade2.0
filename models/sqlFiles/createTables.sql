-- create tables 
create table users(
user_id int not null unique,
name    varchar (255),
password text not null,
email   text not null unique,
primary key(user_id)
);

create table student(
user_id	int not null references users(user_id) ON DELETE CASCADE,
student_id int unique,
primary key(user_id)
);

create table instructor(
user_id	int not null unique references users(user_id) ON DELETE CASCADE,
instructor_id int unique,
primary key(user_id)
);

create table GA(
user_id	int not null references users(user_id) ON DELETE CASCADE,
GA_id int unique,
primary key(user_id)
);

create table administrator(
user_id	int not null references users(user_id) ON DELETE CASCADE,
admin_id int unique,
primary key(user_id)
);

create table accounts(
account_id	int not null,
name		varchar(255),
email		text,
password	text,
type		varchar(20),
primary key(account_id)
);

create table courses(
course_id	int not null unique,
name	 	varchar(255),
shortName   varchar(60),
primary key(course_id)
);

create table notes(
note_id	int not null,
name	varchar(255),
description	text,
datePosted  date default CURRENT_DATE,
timePosted time default CURRENT_TIME,
filePath text,
primary key(note_id)
);

create table assignments(
assignment_id	int not null,
title  varchar(60),
type   varchar(30),
details text, 
filePath text,
maxPoints int,
dateCreated date default CURRENT_DATE,
timeCreated time default CURRENT_TIME,
dueDate date not null,
dueTime time not null,
primary key(assignment_id)
);

create table assistant(
course_id int not null references courses(course_id),
GA_id			   int references GA(user_id),
primary key(course_id)
);

create table teaches(
course_id int not null references courses(course_id),
instructor_id	   int references instructor(user_id),
primary key(course_id)
);

create table enrolled(
course_id int references courses(course_id),
student_id int references student(user_id)
);

create table course_notes(
note_id int not null references notes(note_id),
course_id		 int references courses(course_id),
primary key(note_id)
);

create table course_assignments(
assignment_id int not null references assignments(assignment_id),
course_id		       int references courses(course_id),
primary key(assignment_id)
);

create table GA_create_note(
note_id int not null references notes(note_id),
GA_id		     int references GA(user_id),
primary key(note_id)
);

create table instructor_create_note(
note_id int not null references notes(note_id),
instructor_id	 int references instructor(user_id),
primary key(note_id)
);

create table GA_create_assignment(
assignment_id int not null references assignments(assignment_id),
GA_id		           int references GA(user_id),
primary key(assignment_id)
);

create table instructor_create_assignment(
assignment_id int not null references assignments(assignment_id),
instructor_id		   int references instructor(user_id),
primary key(assignment_id)
);

create table submitted_assignments(
student_id    int not null references student(user_id),
assignment_id int not null references assignments(assignment_id),
filePath				   text,
primary key(student_id, assignment_id)
);

create table GA_grade(
student_id    int not null references student(user_id),
assignment_id int not null references assignments(assignment_id),
GA_id		           int references GA(user_id),
grade				   int,
primary key(assignment_id)
);

create table instructor_grade(
student_id    int not null references student(user_id),
assignment_id int not null references assignments(assignment_id),
instructor_id		   int references instructor(user_id),
grade				   int,
primary key(assignment_id)
);

create table make_account(
account_id int not null references accounts(account_id),
admin_id		    int references administrator(user_id),
primary key(account_id)
);

-- Create Session Table (connect-pg-simple)
    
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;