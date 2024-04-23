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
