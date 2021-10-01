# MOTORANS

Motorans adalah REST API yang digunakan untuk mencatatat koleksi motor User dengan berbagai macam type, REST API ini juga bisa menampilkan data asal pabrik, engine, dan type motor

## USERS

**POST** `/users/login`

    POST Body:
    1. email
    2. password

    Users login berguna untuk melakukan login jika user sudah melakukan signUp

**POST** `/users/signup`

    POST Body:
    1. name
    2. email
    3. Password

    Users signup berguna untuk melakukan signUp/register user

**GET** `/users`

    Users GET berfungsi untuk menampilkan semua data user  (hanya bisa di akses oleh admin)

**GET** `/users/:id`

    Users GET berfungsi untuk menampilkan data detail users hanya dirinya saja (users tidak bisa akses data users lain nya)

**PATCH** `/users/:id`

    Users PATCH berfungsi untuk melakukan update data users (hanya users yang bisa melakukan update data dirinya dan
    admin tidak bisa melakukan update di data users)

**POST** `/users/:id/motorcycles`

    POST Body :
    1. Motorcycled

    POST Motorcycles berfungsi untuk menambahkan motor ke koleksi user

**DELETE** `/users/:id/motorcyles/:motorcyclesId`

    DELETE digunakan untuk menghapus pilihan motor dari koleksi user

## MOTORCYCLES

**GET** `/motorcycles`

    Motorcycles GET berfungsi untuk menampilkan semua data yang berada di dalam data motorcycles

**GET** `/motorcycles/:id`

    Motorcycles GET berfungsi untuk menampilkan data detail yang sesuai dengan id

**POST** `/motorcycles`

    POST Body:
    1. motorName
    2. price
    3. factoriesId
    4. engineId
    5. typeId
    6. releaseYear

    Motorcycles POST digunakan untuk membuat/create koleksi motor baru yang ada di `/motorcycles`

**PATCH** `/motorcycles/:id`

    Motorcycles PATCH berfungsi untuk melakukan update koleksi motor ( **only admin** )

**DELETE** `/motorcycles/:id`

    Motorcycles DELETE berfungsi untuk  meghapus koleksi motor yang berada di `/motorcycles`

## ENGINES

**GET** `/engines`

    Engines GET berfungsi untuk menampilkan semua data yang ada di Engines (users sama admin bisa akses data engines)

**POST** `/engines`

    Post body terdapat :
    1. transmission
    2. stroke
    3. gearbox

    Engines POST digunakan untuk membuat data baru di data engines (hanya bisa dilakukan oleh admin saja)

**GET** `/engines/:id`

    Engines GET berfungsi untuk menampilkan data detail yang ada di Engines (users sama admin bisa akses data detail
    engines)

**PATCH** `/engines/:id`

    Engines PATCH berfungsi untuk melakukan update data engines nya (hanya bisa dilakukan oleh admin)

**DELETE** `/engines/:id`

    Engines DELETE berfungsi untuk menghapus/delete data engines nya (hanya bisa di lakukan oleh admin)

## FACTORIES

**GET** `/factories`

    Factories GET berfungsi untuk menampilkan semua informasi data dari factories

**POST** `/factories`

    POST Body
    1. nameFactories
    2. president
    3. headquarter
    4. founded

    Factories POST berfungsi untuk membuat/create informasi data baru ( hanya bisa dilakukan oleh admin)

**GET** `/factories/:id`

    Factories GET berfungsi untuk menampilkan informasi data secara spesifik mengguna ID

**PATCH** `/factories/:id`

    Factories PATCH berfungsi untuk update informasi data ( hanya bisa dilakukan oleh admin )

**DELETE** `/factories/:id`

    Factories DELETE berfungsi untuk mengahapus informasi data ( hanya bisa dilakukan oleh admin )

## TYPES

**GET** `/type`

    Types GET berfungsi untuk menampilkan semua data yang ada di Types (users sama admin bisa akses data Types)

**GET** `/tpye/:id`

    Types GET berfungsi untuk menampilkan data detail yang ada di Types (users sama admin bisa akses data detail
    Types)

**POST** `/type/:id`

    POST Body
    1. typeName
    2. foundedYear
    3. foundedCountry

    Types **POST** digunakan untuk membuat data baru di data Types (hanya bisa dilakukan oleh admin saja)

**PATCH** `/type/:id`

    Types PATCH berfungsi untuk melakukan update data Types nya (hanya bisa dilakukan oleh admin)

**DELETE** `/type/:id`

    Types DELETE berfungsi untuk menghapus/delete data Types nya (hanya bisa di lakukan oleh admin)
