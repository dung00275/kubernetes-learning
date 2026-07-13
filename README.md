# Kubernetes Learning Portal

A free personal Kubernetes study website built with Material for MkDocs and deployed with GitHub Pages.

## Run locally

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open `http://127.0.0.1:8000`.

## Publish to GitHub Pages

1. Create a GitHub repository named `kubernetes-learning`.
2. Replace `YOUR_GITHUB_USERNAME` in `mkdocs.yml`.
3. Push this project to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. Run the `Deploy MkDocs to GitHub Pages` workflow if it does not start automatically.

## Progress

Practice completion and quiz scores are stored in browser `localStorage`. They are private to the browser and are not synchronized between devices.
