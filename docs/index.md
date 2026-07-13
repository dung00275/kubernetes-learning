# Kubernetes Learning Dashboard

<div class="hero">
  <h2>Learn concepts. Run labs. Break things. Fix them.</h2>
  <p>A practical Kubernetes learning route from beginner to production troubleshooting.</p>
</div>

## Current target

Complete the first three beginner labs:

- [ ] Create and inspect a Pod
- [ ] Create, scale and update a Deployment
- [ ] Expose an application using a Service

<div class="progress-card">
  <strong>Your browser progress</strong>
  <div class="progress-track"><div id="global-progress-bar"></div></div>
  <p id="global-progress-text">0 practices completed</p>
</div>

## Learning route

```mermaid
flowchart LR
    A[Container basics] --> B[Pod]
    B --> C[Deployment]
    C --> D[Service]
    D --> E[ConfigMap and Secret]
    E --> F[Storage]
    F --> G[Ingress]
    G --> H[RBAC]
    H --> I[Troubleshooting]
    I --> J[Production project]
```

## How to use this portal

1. Read one concept for no more than 10 minutes.
2. Start its practice immediately.
3. Validate the result using the supplied commands.
4. Intentionally introduce the listed failure.
5. Fix it without opening the solution.
6. Mark the practice complete.
7. Take the exam after finishing a module.
