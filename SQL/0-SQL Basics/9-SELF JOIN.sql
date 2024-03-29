-- # 1. How many stops are in the database. 
SELECT COUNT(*)
  FROM stops

-- # 2. Find the id value for the stop 'Craiglockhart' 
SELECT id
  FROM stops
 WHERE name = 'Craiglockhart'

-- # 3. Give the id and the name for the stops on the '4' 'LRT' service. 
SELECT id, name
  FROM stops JOIN route
    ON id = stop
 WHERE num = '4'
   AND company = 'LRT'

-- # 4. Add a HAVING clause to restrict the output to these two routes. 
SELECT company, num, COUNT(*)
  FROM route WHERE stop=149 OR stop=53
GROUP BY company, num
HAVING COUNT(*) = 2

-- # 5. Change the query so that it shows the services from Craiglockhart to London Road. 
SELECT a.company, a.num, a.stop, b.stop
  FROM route a JOIN route b ON
  (a.company=b.company AND a.num=b.num)
WHERE a.stop=53 AND b.stop = 149

-- # 6. Change the query so that the services between 'Craiglockhart' and 'London Road' are shown.
SELECT a.company, a.num, stopa.name, stopb.name
FROM route a JOIN route b ON
  (a.company=b.company AND a.num=b.num)
  JOIN stops stopa ON (a.stop=stopa.id)
  JOIN stops stopb ON (b.stop=stopb.id)
WHERE stopa.name='Craiglockhart' AND stopb.name = 'London Road'

-- # 7. Give a list of all the services which connect stops 115 and 137 ('Haymarket' and 'Leith') 
SELECT a.company, a.num 
  FROM route a JOIN route b ON a.company = b.company AND a.num = b.num
 WHERE a.stop = 115 AND b.stop = 137
 GROUP BY a.company, a.num

--  # 8. Give a list of the services which connect the stops 'Craiglockhart' and 'Tollcross' 
SELECT a.company, a.num
  FROM route a JOIN route b ON a.company = b.company AND a.num = b.num
  JOIN stops stopa ON stopa.id = a.stop
  JOIN stops stopb ON stopb.id = b.stop
 WHERE stopa.name = 'Craiglockhart' AND stopb.name = 'Tollcross'
 GROUP BY a.company, a.num