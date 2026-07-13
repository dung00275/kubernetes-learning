# Practice 03 — Service Networking

**Level:** Beginner  
**Estimated time:** 20 minutes

## Target

- Expose a Deployment using ClusterIP.
- Validate Service endpoints.
- Diagnose a selector mismatch.

## Tasks

1. Expose deployment `web` on port 80.
2. Inspect the Service and endpoints.
3. Run a temporary curl Pod and request `http://web`.
4. Change the Service selector to an invalid value.
5. Confirm endpoints become empty.
6. Restore the selector.

## Validation

```bash
kubectl get service web -n learning
kubectl get endpoints web -n learning
kubectl run curl --rm -it --restart=Never   --image=curlimages/curl -n learning -- http://web
```

??? success "Solution"

    ```bash
    kubectl expose deployment web --port=80 --target-port=80 -n learning
    kubectl get service,endpoints -n learning
    kubectl run curl --rm -it --restart=Never       --image=curlimages/curl -n learning -- http://web
    ```

<button class="practice-complete" data-practice="beginner-03">Mark practice complete</button>
