# Quran & Hadith RESTful API [1.0.0]

You can use this API to fetch data about the holy Quran and Hadiths (Arabic / English) for your app or website

## Data Count

- Surahs : 114
- Ayat : 6236
- Hadiths : 14736

## Data Format

- Surah

  ```JavaScript
  {
  number: Int,
  surahName: String,
  surahNameEn: String,
  noOfWords: Int,
  noOfLetters: Int,
  type: String,
  typeEn: String,
  text: String,
  textEn: String,
  }
  ```

- Ayah

  ```JavaScript
  {
  number: Int,
  text: String,
  textEn: String,
  surah: Int
  }
  ```

- Hadith

  ```JavaScript
  {
  number: Int,
  text: String,
  textEn: String,
  }
  ```

## Usage

### Pagination :

you can use pagination when fetching a list of data by adding this query string `?page=<page number>&limit=<limit per page>`

replace `<page number>` with the number of page you want to fetch (default = 1)

replace `<limit per page>` with the number of documents you want to fetch per page (default = 15000)

### Surahs :

#### Get All Surahs

`GET https://quran-hadith-api.onrender.com/api/v1/surahs`

#### Get Surah

`GET https://quran-hadith-api.onrender.com/api/v1/surahs/<surah number>`

replace `<surah number>` with the number of surah you want to fetch

### Ayat :

#### Get All Ayat

`GET https://quran-hadith-api.onrender.com/api/v1/ayat`

#### Get All Ayat In Surah

`GET https://quran-hadith-api.onrender.com/api/v1/surahs/<surah number>/ayat`

replace `<surah number>` with the number of surah you want to fetch the ayat for

#### Get Ayah In Surah

`GET https://quran-hadith-api.onrender.com/api/v1/surahs/<surah number>/ayat/<ayah number>`

replace `<surah number>` with the number of surah you want to fetch the ayah for

replace `<ayah number>` with the number of ayah you want to fetch

### Hadiths :

#### Get All Hadiths

`GET https://quran-hadith-api.onrender.com/api/v1/hadiths`

#### Get Hadith

`GET https://quran-hadith-api.onrender.com/api/v1/hadiths/<hadith number>`

replace `<hadith number>` with the number of hadith you want to fetch

## Contributing

Contributing is welcomed by sending a pull request

## License

This project is open-sourced under the MIT license.
