# PlantManagerAPI

## Opis
Projekt aplikacji RestAPI z funkcjami CRUD do obsługi bazy danych MongoDB. Aplikacja zarządza listą roślin, umożliwiając odczyt, dodawanie, usuwanie i aktualizację danych.

## Wymagania projektu:
- Odczyt danych z bazy (GET)
- Odczyt rekordu dla określonego ID (GET)
- Usunięcie rekordu z bazy danych (DELETE)
- Aktualizacja rekordu w bazie danych (PUT)

## Instalacja:
1. `npm install`
2. npm start

## Konfiguracja bd:
    `mongod`

## Struktura
PlantManagerAPI/
├── models/
│   └── plant.js        # Model Mongoose dla roślin
├── routes/
│   └── plantRoutes.js  # Trasy API
├── node_modules/       # Zależności
├── package.json        # Konfiguracja projektu
├── .gitignore          # Pliki ignorowane przez Git
├── index.js            # Główna aplikacja serwera
└── README.md           # Dokumentacja projektu
