
export const checkStatusMap = {
  0: 'Zapytanie oczekuje w kolejce.',
  1: 'Kompilacja rozwiązania.',
  2: 'Kompilacja rozwiązania.',
  3: 'Wykonywanie programu.',
  4: 'Kompilacja testów.',
  5: 'Wykonywanie testów.',
  7: '',
  8: 'Testowanie programu.',

  11: 'Błąd kompilacji programu.',
  12: 'Błąd wykonywania programu.',
  13: 'Przekroczono limit czasu wykonywania.',
  14: 'Niepoprawne rozwiązanie.',
  15: 'Gratulacje!<br>Rozwiązanie zostało zaakceptowane.',
  17: 'Przekroczono limit pamięci.',
  19: 'Illegal system call.',
  20: 'Błąd wewnętrzny.'
};
 /* 0 	waiting 	submission is waiting in the queue
  1,2 	compilation 	program is being compiled (for compiled languages)
  3 	execution 	program is being executed
  4 	compiling judge 	compilation of the judge (for judges implemented in compiled languages)
  5 	executing judge 	execution of the judge program
  6 	compiling master judge 	compilation of the master judge (for judges implemented in compiled languages)
  7 	executing master judge 	execution of the master judge program
  8 	testing program 	the program is being tested

  11 	compilation error 	the program could not be executed due to a compilation error
  12 	runtime error 	an error occurred while the program was running (e.g. division by zero)
  13 	time limit exceeded 	the program exceeded the time limit
  14 	wrong answer 	incorrect solution
  15 	accepted 	correct solution
  17 	memory limit exceeded 	the program exceeded the memory limit
  19 	illegal system call 	the program tried to call illegal system function
  20 	internal error 	an unexpected error occurred on the Sphere Engine side
  try making the submission again and if this occurs again, please contact us*/
