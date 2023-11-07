# cypresstest
Selle testi eesmärk on automatiseerida Google'is otsing Cypressi testimisraamistiku abil. See kontrollib, kas otsingufunktsioon töötab õigesti, avades Google'i veebisaidi, loobudes küpsistebännerist, sisestades otsingutermini ja kontrollides otsingutulemuste olemasolu.

### Test koosneb järgmistest etappidest:
- Avatakse Google'i veebisait.
- Loobutakse küpsisebännerist, klõpsates nupul tekstiga "Keeldu kõigist".
- Sisestakse Google'i otsingu sisestusväljale otsingusõna "ducks".
- Klõpsatakse esimest nuppu "Google'i otsing".
- Oodatakse, kuni otsingutulemused laaditakse ja on nähtavad.
- Veendutakse, et otsingutulemuste lehel oleks tekst "ducks".

## Tekkinud probleemid

### Küpsiste pop-upi eemaldamine

- Probleem: test üritas pop-upi sulgeda, otsides elementi klassi järgi ja sealt nuppu otsides, kuid nuppu ei leitud õigesti. 
(cy.get('.gws-wa').find('button').click();
- Lahendus: probleem lahendati otsingu muutmisega. Otsiti nupp, mis sisaldaks teksti "Keeldu kõigist". See tagas küpsiste pop-upi sulgemise.
cy.get('button:contains("Keeldu kõigist")').click();

### Otsingu puhul enteri vajutamine

- Probleem: test üritas vajutada enter, aga enteri asemel tuli sisestatud teksti järele tühi rida ning otsingut ei toimunud.
- Lahendus: selle probleemi lahendamiseks eemaldati enteri vajutamine. Lisati järgmine testi samm, kus klikitakse enteri asemel otsingu sooritamise nupule.

### Otsingu nupu klikkimine

- Probleem: test üritas klõpsata nupul "Google'i otsing", kuid sama sildiga oli mitu nuppu.
- Lahendus: selle probleemi lahendamiseks lisati eq(0), et valida esimene "Google'i otsingu" nupp. Siis toimis nupu klikkimine.
