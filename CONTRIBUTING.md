Follow these step to contribute:  

###### Step #0: Pull Github repository ######
```Shell
$ cd pb-materialize/
$ npm install
$ grunt
```

---

##### Step #1: Updating the CHANGELOG (README.md)  #####

After you've completed your changes, update the changelog with a summary of your commits.

Example:

- tag of **0.0.6**
- updated navbar

###### Step #2: README.md ######
```Markdown
###### v0.0.6 (2015-15-15)  ######
- Updated styling for navbar.

###### v0.0.5 (2015-15-15) ######
- Fixed grunt issues.

###### v0.0.4 (2015-15-15) ######
- Refactored navbar sass.
```

---

##### Step #3: Updating the bower version  #####

Update the version number in bower by editing 'bower.json'.

For example, changing previous version **0.0.5** to version **0.0.6**.  

###### Step #4: bower.json ######
```JSON
{
  "name": "pb-materialize",
  "version": "0.0.6",
  "authors": [
    "Pixbit Development"
  ],
  "main": "dist/pb-materialize.css",
  "license": "MIT",
  "homepage": "http://thinkpixbit.com"
}
```

##### Step #5: Committing your changes #####

Example:
- added a **navbar** component to library

```Shell
$ git add .
$ git commit -m "navbar: some styling in top toolbar"
```

Example:
- new tag of **0.0.6**
- commit shorthand hash(SHA) of **493e209**

```Shell
$ git tag -a "0.0.6" 493e209 -m "navbar styling"  
$ git push origin master; git push origin --tags
```

---

In project using **pb-materialize**
- To pull latest changes into your project, run:
```Shell
$ bower update
```
