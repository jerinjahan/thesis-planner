import { Task } from "@/types/task";

// export const initialTaskss: Task[] = [
//     // Month 1: Research & Planning
//     {
//         id: "task-1",
//         title: "Define research objectives",
//         description: "Clarify scope and goals for the thesis",
//         isCompleted: false,
//         month: 1,
//         week: 1,
//     },
//     {
//         id: "task-2",
//         title: "Explore literature on CNN, EEG, and sleep disorders",
//         description: "Focus on papers from last 5 years",
//         isCompleted: false,
//         month: 1,
//         week: 2,
//     },
//     {
//         id: "task-3",
//         title: "Understand explainability techniques (XAI)",
//         description: "LIME, SHAP, Grad-CAM",
//         isCompleted: false,
//         month: 1,
//         week: 3,
//     },
//     {
//         id: "task-4",
//         title: "Finalize dataset and start preprocessing",
//         description: "Use Sleep-EDF or PhysioNet",
//         isCompleted: false,
//         month: 1,
//         week: 4,
//     },

//     // Month 2: Modeling
//     {
//         id: "task-5",
//         title: "Complete data preprocessing pipeline",
//         description: "Filtering, segmentation, labeling",
//         isCompleted: false,
//         month: 2,
//         week: 1,
//     },
//     {
//         id: "task-6",
//         title: "Design base CNN model architecture",
//         description: "Use 1D or 2D CNN based on input format",
//         isCompleted: false,
//         month: 2,
//         week: 2,
//     },
//     {
//         id: "task-7",
//         title: "Train and evaluate baseline CNN model",
//         description: "Track accuracy, F1-score, confusion matrix",
//         isCompleted: false,
//         month: 2,
//         week: 3,
//     },
//     {
//         id: "task-8",
//         title: "Document model design and experiment setup",
//         isCompleted: false,
//         month: 2,
//         week: 4,
//     },

//     // Month 3: Explainability & Evaluation
//     {
//         id: "task-9",
//         title: "Apply explainability tools (Grad-CAM/LIME/SHAP)",
//         isCompleted: false,
//         month: 3,
//         week: 1,
//     },
//     {
//         id: "task-10",
//         title: "Analyze feature importance across EEG channels",
//         isCompleted: false,
//         month: 3,
//         week: 2,
//     },
//     {
//         id: "task-11",
//         title: "Compare CNN with other models (SVM, RF, etc.)",
//         isCompleted: false,
//         month: 3,
//         week: 3,
//     },
//     {
//         id: "task-12",
//         title: "Ablation study and statistical significance test",
//         isCompleted: false,
//         month: 3,
//         week: 4,
//     },

//     // Month 4: Writing & Finalization
//     {
//         id: "task-13",
//         title: "Write first draft: Introduction & Literature Review",
//         isCompleted: false,
//         month: 4,
//         week: 1,
//     },
//     {
//         id: "task-14",
//         title: "Write Methodology & Results sections",
//         isCompleted: false,
//         month: 4,
//         week: 2,
//     },
//     {
//         id: "task-15",
//         title: "Get supervisor feedback and revise draft",
//         isCompleted: false,
//         month: 4,
//         week: 3,
//     },
//     {
//         id: "task-16",
//         title: "Finalize report and prepare for submission",
//         isCompleted: false,
//         month: 4,
//         week: 4,
//     },
// ];

export const initialTasks: Task[] = [
    // =================================================================
    // MONTH 1: Literature Review & Dataset Acquisition
    // =================================================================
    {
        id: "m1-task1",
        title: "[Month 1] Literature Survey (Week 1-2)",
        description: "✅ Read 15-20 recent papers (2020-2024) on:\n" +
                    "   - CNN-based EEG analysis\n" +
                    "   - Sleep disorders (Apnea, Insomnia, Narcolepsy)\n" +
                    "   - XAI techniques (Grad-CAM, SHAP, LIME)\n" +
                    "✅ Identify research gaps\n" +
                    "✅ Draft Introduction & Related Work sections",
        isCompleted: false,
        month: 1,
        week: 1,
        monthName: "Literature Review & Dataset Acquisition",
    },
    {
        id: "m1-task2",
        title: "[Month 1] Dataset Selection (Week 3)",
        description: "🔍 Choose a public EEG dataset:\n" +
                    "   - Sleep-EDF (MIT-BIH)\n" +
                    "   - SHHS (Sleep Heart Health Study)\n" +
                    "   - ISRUC-Sleep\n" +
                    "📝 Document dataset statistics & licensing",
        isCompleted: false,
        month: 1,
        week: 3,
        monthName: "Literature Review & Dataset Acquisition",
    },
    {
        id: "m1-task3",
        title: "[Month 1] EEG Preprocessing (Week 4)",
        description: "⚙️ Implement preprocessing pipeline:\n" +
                    "   - Bandpass/notch filtering\n" +
                    "   - Min-Max/Z-score normalization\n" +
                    "   - Epoch segmentation (30s windows)\n" +
                    "📝 Write Dataset & Preprocessing section",
        isCompleted: false,
        month: 1,
        week: 4,
        monthName: "Literature Review & Dataset Acquisition",
    },

    // =================================================================
    // MONTH 2: Model Development & Training
    // =================================================================
    {
        id: "m2-task1",
        title: "[Month 2] Baseline CNN Model (Week 5-6)",
        description: "🤖 Design 1D/2D CNN architecture (TensorFlow/PyTorch)\n" +
                    "📊 Train with metrics: Accuracy, F1-score, AUC-ROC\n" +
                    "🔬 Compare vanilla CNN vs. CNN+LSTM",
        isCompleted: false,
        month: 2,
        week: 2,
        monthName: "Model Development & Training",
    },
    {
        id: "m2-task2",
        title: "[Month 2] XAI Integration (Week 7-8)",
        description: "🔍 Implement explainability:\n" +
                    "   - Grad-CAM (EEG region importance)\n" +
                    "   - SHAP/LIME (feature attribution)\n" +
                    "📝 Write Methodology section",
        isCompleted: false,
        month: 2,
        week: 4,
        monthName: "Model Development & Training",
    },

    // =================================================================
    // MONTH 3: Experiments & Results
    // =================================================================
    {
        id: "m3-task1",
        title: "[Month 3] Hyperparameter Tuning (Week 9-10)",
        description: "🎛️ Optimize using:\n" +
                    "   - Grid Search/Bayesian Optimization\n" +
                    "   - 5/10-fold cross-validation\n" +
                    "📊 Benchmark vs. SVM/Random Forest",
        isCompleted: false,
        month: 3,
        week: 1,
        monthName: "Experiments & Results",
    },
    {
        id: "m3-task2",
        title: "[Month 3] Ablation Study (Week 11-12)",
        description: "🧪 Evaluate model robustness:\n" +
                    "   - Layer removal analysis\n" +
                    "   - Generate saliency maps/heatmaps\n" +
                    "📝 Write Results & Discussion section",
        isCompleted: false,
        month: 3,
        week: 3,
        monthName: "Experiments & Results",
    },

    // =================================================================
    // MONTH 4: Thesis Writing & Finalization
    // =================================================================
    {
        id: "m4-task1",
        title: "[Month 4] Full Draft (Week 13-14)",
        description: "✍️ Complete all sections:\n" +
                    "   - Abstract, Introduction\n" +
                    "   - Related Work, Methodology\n" +
                    "   - Results, Conclusion\n" +
                    "🌐 Use LaTeX/Word + Overleaf",
        isCompleted: false,
        month: 4,
        week: 1,
        monthName: "Thesis Writing & Finalization",
    },
    {
        id: "m4-task2",
        title: "[Month 4] Submission Prep (Week 15-16)",
        description: "🎯 Final steps:\n" +
                    "   - Advisor feedback & revisions\n" +
                    "   - Formatting/Grammar checks\n" +
                    "   - Defense slides (if required)",
        isCompleted: false,
        month: 4,
        week: 3,
        monthName: "Thesis Writing & Finalization",
    }
];