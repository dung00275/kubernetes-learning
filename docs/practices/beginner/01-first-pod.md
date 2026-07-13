# Practice 01 — First Pod

**Level:** Beginner  
**Estimated time:** 15 minutes

## Target

- Create a namespace.
- Create a Pod from YAML.
- Inspect status, logs and container filesystem.
- Diagnose an invalid image.

## Tasks

1. Create namespace `learning`.
2. Create `pod.yaml` for `nginx:1.27`.
3. Apply it to the `learning` namespace.
4. Confirm the Pod is `Running`.
5. Execute `nginx -v` inside the container.
6. Change the image to `nginx:does-not-exist`.
7. Use events to identify the failure.
8. Restore the valid image.

## Validation

```bash
kubectl get pod nginx -n learning
kubectl exec -n learning nginx -- nginx -v
```

## Hints

```bash
kubectl describe pod nginx -n learning
kubectl get events -n learning --sort-by=.metadata.creationTimestamp
```

??? success "Solution"

    ```bash
    kubectl create namespace learning

    cat > pod.yaml <<'EOF'
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      namespace: learning
    spec:
      containers:
        - name: nginx
          image: nginx:1.27
          ports:
            - containerPort: 80
    EOF

    kubectl apply -f pod.yaml
    kubectl get pod nginx -n learning
    kubectl exec -n learning nginx -- nginx -v
    ```

<button class="practice-complete" data-practice="beginner-01">Mark practice complete</button>
