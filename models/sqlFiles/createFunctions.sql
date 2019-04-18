CREATE TYPE points AS (total integer, earned integer);

CREATE OR REPLACE FUNCTION assignment_avg (userID integer, courseID integer, assignmentType integer)  
RETURNS float AS $average$  
declare  
    average float;  
    query_cursor CURSOR FOR select assignments.maxPoints, grade
							from  submitted_assignments, assignments
							where grade is not null and student_id = userID and submitted_assignments.assignment_id = assignments.assignment_id and 
								  submitted_assignments.assignment_id IN (select course_assignments.assignment_id
																		                                  from course_assignments
																		                                  where course_id = courseID) and assignments.type = assignmentType;
    rec points;
    sum_total float;
    sum_earned float;
	
BEGIN  
   sum_total  := 0.0; 
   sum_earned := 0.0;
   OPEN query_cursor;
   FETCH query_cursor INTO rec.total, rec.earned;    -- Read a row from the cursor
   WHILE FOUND LOOP
        sum_total  := sum_total + rec.total;
        sum_earned := sum_earned + rec.earned;
        FETCH query_cursor INTO rec.total, rec.earned;  -- Keep on reading rows
   END LOOP;
   CLOSE query_cursor;
   if sum_total = 0.0 then average := null;
   else average := (sum_earned / sum_total) * 100;
   END IF;
   RETURN average;  
END;  
$average$ LANGUAGE plpgsql;

CREATE TYPE wAvg AS (assignmentAvg float, weight integer);

CREATE OR REPLACE FUNCTION overall(userID integer, courseID integer)  
RETURNS float AS $overall$  
declare  
    overall float;  
    query_cursor2 CURSOR FOR select assignment_avg(userID, courseID, type_id), weight  from course_assignment_types where course_id = courseID;
    rec wAvg;
BEGIN  
   overall := 0.0; 
   OPEN query_cursor2;
   FETCH query_cursor2 INTO rec.assignmentAvg, rec.weight;    -- Read a row from the cursor
   WHILE FOUND LOOP
        if rec.assignmentAvg is null then overall := overall + rec.weight;
        else overall := overall + rec.assignmentAvg * (rec.weight * .01);
        end if;
        FETCH query_cursor2 INTO rec.assignmentAvg, rec.weight;  -- Keep on reading rows
   END LOOP;
   CLOSE query_cursor2;
   RETURN overall;  
END;  
$overall$ LANGUAGE plpgsql;
