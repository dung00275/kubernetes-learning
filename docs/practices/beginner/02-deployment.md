# Practice 02 — Deployment and Scale

**Level:** Beginner  
**Estimated time:** 20 minutes

## Target

- Create a Deployment.
- Scale replicas.
- Perform an update and rollback.

## Tasks

1. Create deployment `web` using `nginx:1.27`.
2. Configure three replicas.
3. Wait for rollout completion.
4. Scale to five replicas.
5. Update to `nginx:1.27.1`.
6. Inspect rollout history.
7. Roll back.

## Validation

```bash
kubectl get deployment web -n learning
kubectl get pods -n learning -l app=web
kubectl rollout status deployment/web -n learning
```

??? success "Solution"

    ```bash
    kubectl create deployment web --image=nginx:1.27 -n learning
    kubectl scale deployment web --replicas=3 -n learning
    kubectl rollout status deployment/web -n learning
    kubectl scale deployment web --replicas=5 -n learning
    kubectl set image deployment/web nginx=nginx:1.27.1 -n learning
    kubectl rollout history deployment/web -n learning
    kubectl rollout undo deployment/web -n learning
    ```

<button class="practice-complete" data-practice="beginner-02">Mark practice complete</button>
