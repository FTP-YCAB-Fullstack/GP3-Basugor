# __MOTORANS APIs__

Motorans adalah REST API yang digunakan untuk mencatatat koleksi motor User dengan berbagai macam type, REST API ini juga bisa menampilkan data asal pabrik, engine, dan type motor

<br>

# USERS

> - **POST**  `/users/login`

      POST Body :
      1. email
      2. password               

      Users login berguna untuk melakukan login jika user sudah melakukan signUp
   
<br>

> - **POST** `/users/signup`

      POST Body :
      1. name
      2. email
      3. Password

      Users signup berguna untuk melakukan signUp/register user

<br>

 > - **GET** `/users`

   *note : hanya bisa di akses oleh admin*

      Users GET berfungsi untuk menampilkan semua data users 
   
<br>

> - **GET** `/users/:id`

   *note : users hanya bisa mengakses datanya sendiri*

      Users GET berfungsi untuk menampilkan data detail users hanya dirinya saja 
        
<br> 

> - **PATCH** `/users/:id`

   *note : hanya users yang dapat membuat dan update infromation, selain users tidak bisa*

      Users PATCH berfungsi untuk melakukan update data users

<br>

> - **POST** `/users/:id/motorcycles`

      POST Body :
      1. Motorcycled
      
      POST Motorcycles berfungsi untuk menambahkan motor ke koleksi user
<br> 

> - **DELETE** `/users/:id/motorcyles/:motorcyclesId`

    DELETE digunakan untuk menghapus pilihan motor dari koleksi user 
<br>

# MOTORCYCLES

> - **GET** `/motorcycles`

   *note : hanya bisa di akses oleh admin dan users*

      Motorcycles GET berfungsi untuk menampilkan semua data yang berada di dalam data motorcycles
<br>

> - **GET** `/motorcycles/:id`

   *note : hanya bisa di akses oleh admin dan users*

      Motorcycles GET berfungsi untuk menampilkan data detail yang berada di motorcycles sesuai dengan id 
<br>

> - **POST** `/motorcycles`

   *note : hanya bisa dilakukan oleh admin* 

      POST Body :
      1. motorName
      2. price
      3. factoriesId
      4. engineId
      5. typeId
      6. releaseYear

      Motorcycles POST digunakan untuk membuat/create koleksi motor baru
<br>

> - **PATCH** `/motorcycles/:id`

   *note : hanya bisa di lakukan oleh admin*

    Motorcycles PATCH berfungsi untuk melakukan update koleksi motor
<br>

> - **DELETE** `/motorcycles/:id`

   *note : hanya bisa di lakukan oleh admin*

    Motorcycles DELETE berfungsi untuk  meghapus koleksi motor yang berada di motorcycles
<br>

# ENGINES

> - **GET** `/engines`

   *note : hanya bisa di akses oleh users dan admin*

    Engines GET berfungsi untuk menampilkan semua data yang ada di Engines
<br>

> - **POST** `/engines`

   *note : hanya bisa di lakukan oleh admin*

    Post body terdapat : 
    1. transmission
    2. stroke
    3. gearbox

    Engines POST digunakan untuk membuat data baru di informasi data engines

> - **GET** `/engines/:id`

   *note : hanya bisa di akses oleh admin dan users*

    Engines GET berfungsi untuk menampilkan data detail yang ada di Engines
<br>

> - **PATCH** `/engines/:id`

   *note : hanya bisa di lakukan oleh admin*

    Engines PATCH berfungsi untuk melakukan update data informasi engines
<br>

> - **DELETE** `/engines/:id`

   *note : hanya bisa di lakukan oleh admin*

    Engines DELETE berfungsi untuk menghapus/delete informasi data engines
<br>

# FACTORIES

> - **GET** `/factories`

   *note : hanya bisa di akses oleh admin dan users*

    Factories GET berfungsi untuk menampilkan semua informasi data dari factories 
<br>

> - **POST** `/factories`

   *note : hanya bisa di lakukan oleh admin*

    POST Body :
    1. nameFactory
    2. president
    3. headquarter
    4. founded

    Factories POST berfungsi untuk membuat/create informasi data baru yang berada di factories
<br>

> - **GET** `/factories/:id`

   *note : bisa di akses oleh admin dan users*

    Factories GET berfungsi untuk menampilkan informasi data secara spesifik yang berada di factories dengan menggunakan id
<br>

> - **PATCH** `/factories/:id`

   *note : hanya bisa di lakukan oleh admin*

    Factories PATCH berfungsi untuk update informasi data yang berada di factories
<br>

> - **DELETE** `/factories/:id`

   *note : hanya bisa di lakukan oleh admin*

    Factories DELETE berfungsi untuk mengahapus informasi data yang berada di factories
<br>

# TYPES

> - **GET** `/type`

   *note : hanya bisa akses oleh admin dan users*

    Types GET berfungsi untuk menampilkan semua data yang berada di Types
<br>

> - **GET** `/tpye/:id`

   *note : hanya bisa akses oleh admin dan users*

    Types GET berfungsi untuk menampilkan data detail yang berada di Types
<br>

> - **POST** `/type/:id`

   *note : hanya bisa dilakukan oleh admin*

    POST Body :
    1. Name
    2. foundedYear
    3. foundedCountry

    Types POST digunakan untuk membuat data baru di data yang berada Types

> - **PATCH** `/type/:id`

   *note : hanya bisa dilakukan oleh admin*

    Types PATCH berfungsi untuk melakukan update data yang berada di Types 
<br>

> - **DELETE** `/type/:id`

   *note : hanya bisa dilakukan oleh admin*

    Types DELETE berfungsi untuk menghapus/delete data yang berada Types