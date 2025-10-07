# SKYRAS-KONAKONA

# 🏠 KONA KONA — Adaptive Living Solutions for Indian Homes

> **KONA KONA** is an AI and AR-based spatial optimization platform that helps people living in small homes utilize every inch of their space effectively, affordably, and intelligently.

---

## 🌱 4D Framework Overview

### 🔹 1. Discover
Modern Indian households face increasing spatial challenges:
- **Shrinking apartment sizes** and rising urban density.  
- **Multi-functional living areas** that need flexible layouts.  
- **Frequent moving** due to job or education relocations.  
- **Western layout imports** that don’t match Indian realities (e.g., no space for Pooja Ghar or drying clothes).  
- **Budget limitations** restricting premium design access.  
- **WFH culture**, merging workspace and living space.

These problems inspired us to create **KONA KONA** — a technology-driven platform that offers *personalized, culture-aware, and adaptive spatial design*.

---

### 🔹 2. Define
Existing tools focus primarily on:
- Aesthetic appeal over functionality.  
- Western furniture brands (e.g., IKEA).  
- Lack of adaptation to Indian home patterns.  
- No reuse/rearrangement of existing furniture.  
- Missing cultural elements and affordability filters.

**Our Mission:**  
> To make *intelligent space design accessible, personalized, and affordable* for every Indian household.

---

### 🔹 3. Develop
**KONA KONA** leverages **AI + AR + Indian design logic** through a modular pipeline.

#### 🧠 NBN (Neural Building Network) AI Pipeline
| Stage | Description |
|-------|--------------|
| **1. LIDAR Scanning** | Capture 3D layout using mobile or device scanner, generating `.glb` model. |
| **2. Blender Integration** | Import `.glb` file into Blender and extract spatial metadata using Python. |
| **3. Metadata Generation** | Convert extracted room and furniture data into structured JSON. |
| **4. Gemini API Processing** | Send metadata JSON to Gemini API (Nano/Bardia) for AI-driven layout generation. |
| **5. Output Generation** | Produce layout suggestions (3 tiers) with reasoning, coordinates, and furnishing ideas. |

#### 💡 Core Features
- **AR-Based Scanning:** Visualize and digitize home layouts.  
- **Lifestyle Recommendations:** Layouts for students, professionals, or families.  
- **Adaptive Arrangements:** Dynamic rearrangements as user needs evolve.  
- **Cultural Fit:** Indian-specific spaces (Pooja Ghar, Tulsi, Jharu, Vastu).  
- **Budget Optimization:** Minimal new purchases and maximum reuse.  
- **3D Visualization:** View layouts in 3D or WebAR.  

#### ⚙️ Technology Stack
- **Frontend:** WebAR, React, Tailwind CSS  
- **Backend:** Python, Flask/FastAPI  
- **AI Engine:** Gemini API + NBN  
- **3D Modeling:** Blender + Python Scripting  
- **Storage:** GitHub Gist / JSON Files  
- **Deployment:** Docker Containerized Environment  

---

### 🔹 4. Deliver
**Output Pipeline**
1. **JSON Output:**  
   - Furniture type, coordinates, and tier-wise layouts  
   - Material and color recommendations  
2. **3D Visualization:**  
   - Digital representation of room layout in AR/3D  
3. **Detailed Report:**  
   - Logic for arrangement  
   - Tier-wise budget suggestions (Basic / Medium / Premium)  
   - Practical and aesthetic enhancement summary  

**Target Users:**
- 🧳 Frequent Movers (students, job professionals)  
- 🏡 Small families optimizing their space  
- 👩‍💼 Young professionals setting up apartments  

**Unique Selling Proposition (USP):**
> An **AR-powered, AI-guided layout recommender** that blends **Indian practicality** with **global design intelligence**.

---

## 🚀 ROADS Framework

| **Element** | **Description** |
|--------------|----------------|
| **R — Reason** | Rising population density and reduced living space demand smarter, affordable design tools for Indian homes. |
| **O — Objectives** | Create an AI-driven spatial recommendation tool using AR scanning and cultural intelligence. |
| **A — Approach** | Combine AR-based 3D scanning, Blender scripting, and Gemini AI to provide layout recommendations and furnishing kits. |
| **D — Data** | Input: `.glb` 3D room models → Processed via Python → JSON metadata → AI layout generation → Report output. |
| **S — Scope** | MVP targets urban Indian homes, extendable to student hostels, rented flats, and compact offices. Future scope includes IoT integration and live room sensing. |

---

## 🧩 Architecture Diagram (Conceptual)


