# StrangerFie (Frontend)

This prototype is built for a concept of group photo-taking with strangers. Anyone is free to stop by and take a photo. After the photo is completed, it can be saved for other purposes _(E.g. publish on social media platforms)._

This is a prototype built for Interaction Design Coursework of BSc IT at UWE, Bristol

## Environment Settings

- Node Version `v20.3.1`

## ENV Variables

```bash
REACT_APP_BACKEND_URL="BACKEND_URL" # E.g. (http://localhost:3001)
PORT=5000 # Default to 3000 if not set
```

## How to Setup/Run

```bash
# Only run on first time setup
npm install

# For development server
npm run start # CTRL+C to stop

# For deployment server
npm run build
npm install -g serve
serve -s build # CTRL+C to stop
serve -s build -p 5000 # Specify port
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## To Deploy onto Azure Static Web App

You will need to redo as it is using different Azure Deploy Key

1. Upload this repo to [GitHub](https://github.com/) or any other Git Providers
2. Create your Azure Static Web App on [Azure Portal](https://portal.azure.com/#home)
3. Link your repo from Git Provider
4. It will automatically publish (It will fail the first time)
5. Go to GitHub repo `Settings` > `Security` > `Secrets and variables` > `Actions`
6. Add new repository secrets `REACT_APP_BACKEND_URL: "BACKEND_SERVER_URL"`
7. Add these lines below `Build And Deploy` steps

```
- name: Build And Deploy
	id: builddeploy
	uses: Azure/static-web-apps-deploy@v1
	with:
		...
	env:
  	REACT_APP_BACKEND_URL: ${{ secrets.REACT_APP_BACKEND_URL }}
```
