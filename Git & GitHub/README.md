# Git & GitHub Basics

### Setting Up Git

Configure username

```
git config --global user.name your_username_here
```

Configure email address

```
git config --global user.email your_email_address_here
```

To check your current username and email configuration

```
git config user.name
git config user.email
```

If you wish to not expose your email address when you commit on GitHub, a `noreply` email address can be used for this purpose.
Visit https://github.com/settings/emails and check the `Keep my email addresses private` option, now from here you can use the `noreply`
email directly if you are using through website or if you are using command line git tool, you can easily set your `noreply` email using the
config command above.

### Working of Git

Modified (files that has been modified/changed) ➤➤➤ Staged (files that have been added to staging are files that we want to commit) ➤➤➤ Commit (files that are in staging are commited when we make a commit)

<br>
<hr>

### Some Useful Git Commands

1. Initialize a repository inside any folder

```
git init
```

**NOTE: We can initialize any folder as a git repository, the folder can either be empty or may already have some files.**

2. See which files have been modified

```
git stages
```

3. Add modified files to staging

```
git add name_of_modified_file
```

4. Remove any file from staging area

```
git rm --cached path_to_file_you_want_to_remove
```

5. Add all the modified files to staging area at once

```
git add .
```

6. Make a commit

```
git commit -m "descriptive_message_here"
```

7. See all your commits

```
git log
```

8. See all commits in single lines

```
git log --oneline
```

9. See state of code in a commit ( Checkout commit )

```
git checkout commit_id_here
```

To get back to current state of code we can use

```
git checkout main
```

This will take us back to our present code

10. Revert a commit

```
git revert commit_id_here
```

11. Reset Commit

```
git reset commit_id --hard
```

12. Git Push
    The git push command pushes your code to github and you can now see your updated code on github.

```
git push origin branch_name_here
```

**NOTE: The default branch name is main, so if you intend to push your code to main branch, specify it in the above command**

<br>
<hr>

### Git Branches

We can create multiple branches for our code that are isolated from the main branch to implement and test new features seperately without breaking our original code and later merge these branches if we want to.

1. Create a new branch

```
git branch branch_name
```

2. See all the available branches

```
git branch -a
```

3. Checkout(Change) branch

```
git checkout branch_name
```

To switch back to main branch we can simply use

```
git checkout main
```

4. Delete a branch

```
git branch -D branch_name
```

**NOTE: -d flag in above command would only work if the branch has been merged with the main branch, else we have to use -D falg to delete the branch**

5. Create new branch and checkout using single command

```
git checkout -b branch_name
```

### Merging Branches and Fixing Conflicts

To merge brancheswe have to be on the branch in which we want to merger other branch(es)

1. Merge branches

To merge `v1` branch into `main` branch we will use the following command

```
git merge v1
```

2. Fixing conflicts

To fix conflicts simply modify the file with conflict and then commit without a message

```
git commit
```
