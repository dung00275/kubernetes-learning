# Pod

## Target

Create, inspect and debug the smallest deployable Kubernetes workload.

A Pod contains one or more containers that share networking and configured volumes.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx:1.27
      ports:
        - containerPort: 80
```

## Useful commands

```bash
kubectl apply -f pod.yaml
kubectl get pod nginx -o wide
kubectl describe pod nginx
kubectl logs nginx
kubectl exec -it nginx -- sh
```

## Common failures

- Invalid image tag: `ImagePullBackOff`
- Application exits repeatedly: `CrashLoopBackOff`
- Insufficient resources or scheduling constraints: `Pending`

Continue with [Practice 01](../practices/beginner/01-first-pod.md).
