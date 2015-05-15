Follow these step to contribute:  
1. Pull Github repository, `$ cd` into the root of the directory.
2. `$ npm install`
3. Run `$ grunt` for watching and compiling sass. Alternatively run `$ grunt sass` if you like repeating yourself :smile:.
4. After you've completed your changes, commit, then update the version number in bower by editing `bower.json` (example: previous version = 0.0.3 -> 0.0.4).
5. `$ git tag -a "(your version number ex 0.0.4)" (commit SHA) -m "(message)"`
6. `$ git push origin master; git push origin --tags`
7. To pull latest changes into your project, run `$ bower update`.
