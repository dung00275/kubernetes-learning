# kubectl Cheatsheet

## Context and namespaces

```bash
kubectl config get-contexts
kubectl config current-context
kubectl config use-context <context>
kubectl get namespaces
kubectl config set-context --current --namespace=<namespace>
```

## Inspect

```bash
kubectl get pods -A
kubectl get pods -o wide
kubectl get all
kubectl describe pod <pod>
kubectl get events --sort-by=.metadata.creationTimestamp
```

## Logs and shell

```bash
kubectl logs <pod>
kubectl logs -f <pod>
kubectl logs <pod> -c <container>
kubectl logs <pod> --previous
kubectl exec -it <pod> -- sh
```

## Generate manifests

```bash
kubectl run nginx --image=nginx --dry-run=client -o yaml
kubectl create deployment web --image=nginx --dry-run=client -o yaml
kubectl create service clusterip web --tcp=80:80 --dry-run=client -o yaml
```

## Rollouts

```bash
kubectl rollout status deployment/<name>
kubectl rollout history deployment/<name>
kubectl rollout undo deployment/<name>
```
