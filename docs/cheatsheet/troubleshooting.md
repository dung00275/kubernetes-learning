# Troubleshooting Cheatsheet

Use this order:

```text
Resource status → describe → events → logs → configuration → networking
```

```bash
kubectl get pod -A -o wide
kubectl describe pod <pod>
kubectl get events --sort-by=.lastTimestamp
kubectl logs <pod> --all-containers
kubectl logs <pod> --previous
kubectl get deployment,rs,pod,service,endpoints
kubectl get pod <pod> -o yaml
```

## Symptom map

| Symptom | First checks |
|---|---|
| Pending | Events, node resources, taints, PVC |
| ImagePullBackOff | Image name, tag, registry credentials |
| CrashLoopBackOff | Current and previous logs, command, environment |
| Service has no endpoints | Selector, Pod labels, readiness |
| Connection refused | Container port, targetPort, process listener |
| DNS failure | Service name, namespace, CoreDNS |
