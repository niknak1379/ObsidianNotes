https://www.youtube.com/watch?v=T13gDBXarj0

[[Rebase]]
	changes the base of the feature branch to the latest commit on main
		makes for a clean main branch history, but doesnt keep the history of the feature branch?
[[Merge]]
	pulls in the latest commits from the main branch and creates a new commit, basically ties the two different branches with a knot
		preserves all the commit histories and commit graphs
[[Merge --squash]]
	squashes all the commits form the feature branch to one commit on the main branch,
		loses the small detailed commit information of all the small commits on the feature branch
[[Pull]]
	basically `git fetch + git merge`
	`git pull --rebase`
	`git pull --ff` (fast forward) standard merge
	`git pull --ff-only` only does merge if there is a fast forward possibility (no new commits to the main branch that could cause conflicts)
[[Fetch]]
[[Pull Request]]