# Event Booster

Це README нашого проєкту. Тут буде основна інформація про наш проєкт і багато корисних шпаргалок.

## Учасники

Олег (oleg21062010@gmail.com) - тім лід, робить: API key  
Марк (isaev24102011@gmail.com) - скрам мастер, робить: Grid + Cards  
Міша (fff650625@gmail.com) - розробник, робить: Responsive  
Макар (makar2009on@gmail.com) - розробник, робить: Header + Hero  
Даша (d.remen2009@gmail.com) - розробник, робить: Pagination + Footer  
Назар (asagachka@gmail.com) - розробник, робить: поки нічого  
Святослав (S.d.kubar@gmail.com) - розробник, робить: поки нічого
Мирослав (slav.kuki@gmail.com) - розробник, робить: Modal  

## Figma

Посилання на макет Figma нашого проєкту, не забудьте зробити собі копію для повного доступу макету: https://www.figma.com/design/CYG2KLjG7JWnyJkv52LRWl/EVENT-BOOSTER?node-id=1-2&t=ddbsPTpswKdCz58V-0  

## Trello

Посилання на нашу дошку Trello, там тім лід і скрам мастер будуть виставляти завдання ріним учасникам: https://trello.com/b/iLhHvrPa/project-4  

## API Key

Наш ключ до бази даних (API), там є дуже багато даних про події які беруться з Ticketmaster: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=2w8E9usrwRr8erGBxyuy6R0lyvqfaeU4`  

## GitHub

Спочатку треба склонувати репозиторій у свою папку (саме git clone робиться один раз):

```
git clone https://github.com/oleh-yaroshenko/event-booster.git
cd event-booster
```

Потім треба створити свою гілку:

```
git checkout -b [назва гілки типу oleh або mark]
```

Далі ви пишете потрібний код і після того як зробили якусь задачу пишемо це щоб відправити код у репозиторій:

```
git add .
git commit -m “[коментар типу зробив хедер]”
git push origin [назва саме вашої гілки]
```

Потім ви обовʼязково пишете мені щоб я перевірив код і зробив pull request на основну гілку.

### Додатково:

Щоб перевірити на якій ви зараз гілці:

```
git branch
```

Щоб перейти на іншу яка вже існує:

```
git checkout [назва гілки]
```

Перед комітами треба також запевнитись що ви знаходитесь у папці `event-booster` за допомогою команди:

```
cd event-booster
```

## Правила

- Назви класів ми пишемо щоб вони починалися з ключового слова назви вашої секції, наприклад: header-title. Таким способом назви класів не будуть повторюватись між собою в нашому файлі `style.css`
- Аналогічно ми пишемо назви змінних та функцій у файлі `script.js`
- Пишемо ми код саме у своїй секції, в файлах я вже за допомгою коментарів позначив де повинен бути ваш код. 

## Технічне завдання 

Посилання на наше ТЗ яке скидував Сергій, там по факту нічого важливого для вас немає, але хай буде: https://docs.google.com/spreadsheets/d/1dHv-tiaCS9L-5NCXM8Bv27CgL_u4pyaVirIFrN-TCHo/edit?gid=0#gid=0  
