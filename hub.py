# More specific exceptions at the top
# try:
#     f = open('testfile.txt')
# except FileNotFoundError as e:
#     print(e)
# except Exception as e:
#     print(e)
# # Else runs code of the try/exception doesn't catch something
# else:
#     print(f.read())
#     f.close()
# finally:
#     # probably used to disconnect db
#     print('Executing finally')

# # CLASS
# # __init__ = constructor
# # self = javascript equivalent of "this" but can be named anything
# class Error_Hub:
#     def __init__(self(could be called 'ErrorHubInstance'), first, last):
#         self.first = first
#         self.last = last

#     def fullname(self):
#         return '{} {}'.format(self.first, self.last)


# # INSTANCE OF CLASS
# emp_1 = Error_Hub('Ben', 'Hill')
# emp_2 = Error_Hub('Davee', 'Sok')

# print(emp_1.fullname())
# print(emp_2)

# event = Threading.event()
# event.set()

# event.clear()

# event.wait()

# event.is_set()

from pymitter import EventEmitter

events = EventEmitter()


class Error_Hub:
    def log_error(self, e, userid=None, userparam=None, usernote=None):
        self.errors = e
        self.userid = userid
        self.userpararm = userparam
        events.emit('errEvent')
