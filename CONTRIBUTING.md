Follow these step to contribute:  

---

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

---

###### Step #2: Annotate the CHANGELOG.md ######
```Markdown
###### v0.0.6 (2015-15-15)  ######
- Updated styling for navbar.

###### v0.0.5 (2015-15-15) ######
- Fixed grunt issues.

###### v0.0.4 (2015-15-15) ######
- Refactored navbar sass.
```

---

##### Step #4: Committing your changes #####

Example:
- added a **navbar** component to library

```Shell
$ git add .
$ git commit -m "navbar: some styling in top toolbar"
```

---

###### Step #5: Update bower package version ######
```Shell
$ bower version [<newversion> | major | minor | patch] -m "Upgrade for whatever reasons"
```

---

##### Step #6: Pushing your changes #####

```Shell
$ git push origin master; git push origin --tags
```

---

##### Step #7: Pull the changes to your project #####

In project using **pb-materialize**
- To pull latest changes into your project, run:
```Shell
$ bower update
```
