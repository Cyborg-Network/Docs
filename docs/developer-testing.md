# Developer Testing Documentation

## Local Setup

### Prerequisites
- Rust toolchain installed
- Nightly features enabled
- Docker (optional)

### Cyborg Parachain

1. Clone the repository:
```bash
   git clone https://github.com/Cyborg-Network/cyborg-parachain.git
```

2. Build the node:
```bash
   cargo build --release
```

3. Run the node:
```bash 
./target/release/cyborg-node --dev
```

### Cyborg Miner
Choose one of the installation methods:
1. Docker
```bash
docker build -t cyborg-miner:local --network="host" .
docker run <image-id> --network="host"
```
2. From Source 
```bash
git clone https://github.com/Cyborg-Network/Cyborg-worker-node.git
cd Cyborg-worker-node
cargo build --release
```
3. Testing
Run unit tests:
```bash
cargo test
```
For complete testing instructions, refer to the Local Testing guide.
```