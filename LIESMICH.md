Schritt 1:
`npm install`


Schritt 2:
Eigene Daten (dein Name) in `.env` eingeben

Schritt 3:
AdonisJS Extension -> Commands -> Migration & Database -> `migration:run`

`GET /mitarbeiter` sollte jetzt leeres JSON zurückgeben.

Du kannst an `/mitarbeiter` ein POST senden mit einem JSON Element, dass einen `name` und `schuhgroesse`hat, dann erstellt einen neuen, den du unter `GET /mitarbeiter` sehen kannst.
