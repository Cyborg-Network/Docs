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
git clone https://github.com/Cyborg-Network/Cyborg-miner.git
cd Cyborg-miner
cargo build --release
```
3. Testing
Run unit tests:
```bash
cargo test
```
For complete testing instructions, please refer to the [local testing guide](https://github.com/Cyborg-Network/cyborg-parachain/blob/master/Local%20Testing%20NeuroZK_Milestone2.md).