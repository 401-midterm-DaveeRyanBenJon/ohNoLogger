INSERT INTO errevents
  (date, userid, errortype, errormessage, userparam, usernote, stack)
VALUES
  ('2020-10-20T02:37:54.211Z', 'davetest1', 'SyntaxError', 'random syntax error MSG', 'random param', 'random usernote', 'random stack stuff')
RETURNING *;