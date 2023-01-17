# Verziókezelés

Parancsorban való megvalósítás PAT-el:

- helyi repo initializálása: 
  - **git init**
- a projekt könyvtár ellenőrzése(van-e elmentendő fájl ami nincs benne a helyi repoban): 
  - **git status**
- ha van akkor előkészítjük a commit-ra(feltesszük mindent a színpadra/stage): 
  - **git add .**
- ellenőrzés: 
  - **git status**
- eltároljuk a helyi repóba, commit-oljuk: 
  - **git commit -m "first commit"**
- ellenőrzés: 
  - **git status**
- létrehozunk a GitHub-on egy repot
- PAT-t hazsnálva összekapcsoljuk a GitHub-on létrehozott repoval
- feltesszük a távoli repoba(első push-oláskor meg kell mondani a branch nevét is): 
  - **git push -u origin master**
- ellenőrizzük a GitHub oldalán

Publikálás:
- Settings > Pages > Branch: master
- [Color Game](https://mkatay.github.io/colorGame/)