# Kubernetes Architecture

## Target

Understand what happens from `kubectl apply` until a container runs on a node.

```mermaid
sequenceDiagram
    participant U as User
    participant A as API Server
    participant E as etcd
    participant S as Scheduler
    participant K as Kubelet
    participant R as Container Runtime

    U->>A: kubectl apply -f pod.yaml
    A->>A: Authenticate and validate
    A->>E: Store desired state
    S->>A: Watch unscheduled Pod
    S->>A: Bind Pod to Node
    K->>A: Watch assigned Pod
    K->>R: Create container
    K->>A: Report Pod status
```

## Core components

| Component | Responsibility |
|---|---|
| API Server | Kubernetes control-plane API |
| etcd | Persistent desired and observed state |
| Scheduler | Selects a node for a new Pod |
| Controller Manager | Reconciles actual state with desired state |
| Kubelet | Runs and monitors workloads assigned to its node |
| Container runtime | Pulls images and starts containers |

!!! note
    Kubernetes is a reconciliation system. You declare desired state; controllers continuously attempt to make actual state match it.
