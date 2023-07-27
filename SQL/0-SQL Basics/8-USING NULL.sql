# 1. List the teachers who have NULL for their department.
SELECT name FROM teacher WHERE dept IS NULL

# 2. Note the INNER JOIN misses the teachers with no department and the departments with no teacher. 
SELECT teacher.name, dept.name 
  FROM teacher INNER JOIN dept ON (teacher.dept=dept.id)

# 3. Use a different JOIN so that all teachers are listed. 
SELECT teacher.name, dept.name
  FROM teacher LEFT JOIN dept
    ON (teacher.dept = dept.id)

# 4. Use a different JOIN so that all departments are listed. 
SELECT teacher.name, dept.name
  FROM teacher RIGHT JOIN dept
    ON (teacher.dept = dept.id)

# 5. Use COALESCE to print the mobile number.
SELECT name, COALESCE(mobile, '07986 444 2266') FROM teacher

# 6. Use the COALESCE function and a LEFT JOIN to print the teacher name and department name. 
SELECT teacher.name, COALESCE(dept.name, 'None')
  FROM teacher LEFT JOIN dept
    ON teacher.dept = dept.id

# 7. Use COUNT to show the number of teachers and the number of mobile phones. 
SELECT COUNT(teacher.id), COUNT(mobile) FROM teacher

# 8. Use COUNT and GROUP BY dept.name to show each department and the number of staff. 
SELECT dept.name, COUNT(teacher.id)
  FROM teacher RIGHT JOIN dept
    ON dept.id = teacher.dept
    GROUP BY dept.name