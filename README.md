# BAI-EnglishWords

Skład zespołu projektowego

Sławomir Klejdysz (Kierownik projektu)
Mateusz Dąbrowski 189139
Damian Kłeczek
Edmund Kiper

Opis aplikacji:

Aplikacja będzie oferować wygodny sposób nauki słówek w języku Angielski, poprzez listy słówek(użytkownik będzie mógł stworzyć własną listę słów, które później będą wybierane do nauki, lub skorzystać z gotowych list słów z danej kategorii). Użytkownik będzie miał możliwość zarejestrowania się w aplikacji lub zalogowania do niej z wykorzystaniem istniejącego już konta google lub facebook. Dodatkową funkcjonalnością będzie wyświetlanie wybranych słówek w formie przypomnienia, powiadomienia lub na ekranie blokady telefonu. 

Repozytorium projektu:

https://github.com/DabrowskiMateusz/BAI-EnglishWords

Witryna projektu:



Zarządzanie projektem(Trello)

https://trello.com/bogateaplikacjeinternetowe

# Ogólne zasady
1) Wszystkie nowe rzeczy tworzymy na osobnych branchach i dopiero po skończeniu robimy merge do mastera. Po zrobieniu merge do mastera upeniamy się, że projekt nadal działa i nie ma w nim konfliktów, to jest kluczowe inaczej inni potem będą mieć problemy z wykonywaniem swojej pracy.
2) Czas spędzony nad zadaniem wpisujemy w zadaniu w trello (można w komentarzu) w miare możliwości na bieżąco.
3) Jeśli pracujemy nad zadaniem przeciągamy go do in progress, po skończeniu do done żeby inni wiedzieli, że mogą zaczynać swoją robotę.
4) Najlepiej żeby taski były wykonywane przed deadline bo inaczej mogą być potem kłopoty z ukończeniem całości.

# Aplikacja
1) Stworznie graficznego prototypu aplikacji, stworzyć albo w jakimś programie albo przy pomocy ołówka prototyp wyglądu aplikacji (generalnie co gdzie ma być) i jej głównych okien. Przynajmniej następujące okna: logowanie, rejestracja, strona główna, tłumacz, fiszki, uzupełnianie zdań, gramatyka, przypomienie/blokada ekranu, osiągnięcia. Termin ukończenia do 8 kwietnia, commit musi być na masterze przed kodem.
2) Obadać temat połączenia z bazą i tego jak tam przechowywać dane, ewentualnie dorobić jakieś metody pomocnicze które będą potem użyte przy przechowywaniu użytkownika/słówek/zdań itp. Ten krok jest w zasadzie kluczowy dla całej reszty. Termin zakończenia do 9 kwietnia.
3) Autentykacja do aplikacji przy użyciu hasła/loginu oraz facebooka i gmaila. Przycisk login prowadzi do strony głównej (jeśli logowanie się powiedzie), create account, login with facebook/gmail prowadzą do odpowiednich stron do wykonania danej akcji. Rejestracja konta przy użyciu adresu email i hasła, opcjonalnie weryfikacja adresu email. Termin zakończenia do 23 kwietnia.
4) Stworzenie strony głównej, na niej będą linki do poszczególnych stron. Tutaj głównym wyzwaniem jest zrobienie jakiegoś layoutu rozsądnego który będzie potem użyty w reszcie aplikacji. Termin zakończenia do 9 kwietnia.
5) Podstrona odpowiedzialna za dodawanie słówek przez użytkownika. Kolejną rzeczą będzie dodanie bazy słówek które już są w programie do nauki, opcjonalnie można pogrupować je w kategorie, to już leży w gestii implementującego. Termin zakończenia do 16 kwietnia.
6) Dorobienie strony do nauki angielskiego z fiszkami. Strona będzie korzystać z bazy stworzonej w zadaniu 4. Tutaj istotnym elementem będzie też rejestrowanie wyborów użytkownika i tego czy były poprawne czy nie, ta część będzie potem użyta w module śledzenia postępów. Termin zakończenia do 23 kwietnia.
7) Moduł z uzupełnianiem zdań. Tutaj trzeba będzie tak samo jak w powyższym stworzyć bazę zdań oraz słów którymi będziemy je uzupełniać no i utworzyć widok dla tego okna. Tak jak wyżej moduł musi śledzić jak idzie użytkownikowi i zapisywać te informacje w bazie. Termin zakończenia do 23 kwietnia.
8) Moduł gramatyczny, chyba najprostszy z modułów do nauki, tutaj wystarczy utworzyć listę tematów z gramatyki i po prostu dodać jakieś informacje dla każdego. Termin zakończenia do 23 kwietnia.
9) Dodawanie przypomnienia/blokady ekranu, w tym module trzeba będzie obadać temat jak dostać się do urządzenia na którym pracujemy i wykorzystać jego funkcje żeby wyświetlić pożądane informacje. Dobrą opcją byłoby też dodanie opcji losowego słówka codziennie. Termin zakończenia do 23 kwietnia.
10) Moduł tłumacza, tutaj trzeba by użyć api od googla/ewentualnie innego do wykonywania prostych tłumaczeń słówek w aplikacji, po wpisaniu słowa do tłumaczenia można wybrać kierunek tłumaczenia i dostajemy listę możliwych zanczeń. Termin zakończenia do 23 kwietnia.
11) Moduł osiągnięć, tutaj trzeba by zebrać dane które będziemy mieć z modułu z uzupełnianiem zdań i z fiszkami i przedstawić je dla użytkownika w postaci jakichś wykresów – ewentulnie jakis inny pomysl. Termin ukończenia do 30 kwietnia.
12) Testowanie – to jest zadanie dla co najmniej dwóch osób od 30 kwietnia, w ewentualne fixowanie bugów będzie zaangażowany cały team. Termin ukończenia do 5 maja.
