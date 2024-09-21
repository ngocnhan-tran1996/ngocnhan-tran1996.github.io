# My Learning Path About Git

- [Github Guide](https://github.com/git-guides/)
- [Basic Git commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)
- [Example .gitignore file](https://github.com/github/gitignore/blob/main/Java.gitignore)
- [8 Tips to help you work better with Git](https://about.gitlab.com/blog/2015/02/19/8-tips-to-help-you-work-better-with-git/)
- [git-sparse-checkout](https://git-scm.com/docs/git-sparse-checkout)
- [About code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Bring your monorepo down to size with sparse-checkout](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)
- [GitHub Skills](https://skills.github.com/)
- [Changing a commit message](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)

<code>

// gitHub reset
git reset --hard "commit_id"
git reset --soft "commit_id"
git push origin -f

// git rename and delete branch
git branch -m oldname newName
git push origin newName
git push origin :oldname

// copy all file and commit
git branch -c oldname newName

// git stash
git stash clear
git stash list
git stash save -u "name"
git stash apply "name"
git stash drop "name"
git stash pop "name"

// git remove
git rm -r *

// git config
git config --global user.name "user_name"
git config --global user.email "user_email"


git commit -m "Title" -m "Test"
</code>