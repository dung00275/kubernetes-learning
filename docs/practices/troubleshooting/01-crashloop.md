# Troubleshooting 01 — CrashLoopBackOff

## Target

Identify why a container repeatedly exits and repair the workload.

## Broken manifest

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: broken-app
  namespace: learning
spec:
  containers:
    - name: app
      image: busybox:1.36
      command: ["sh", "-c", "echo Starting; exit 1"]
```

## Tasks

1. Apply the manifest.
2. Observe the restart count.
3. Read current and previous logs.
4. Inspect events.
5. Change the command so the container remains running.
6. Verify the Pod becomes healthy.

## Validation

```bash
kubectl get pod broken-app -n learning
kubectl logs broken-app -n learning --previous
```

??? success "Solution"

    Replace the command with:

    ```yaml
    command: ["sh", "-c", "echo Starting; sleep 3600"]
    ```

<button class="practice-complete" data-practice="troubleshooting-01">Mark practice complete</button>
