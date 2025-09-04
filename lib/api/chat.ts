export interface ChatMessage {
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
    metadata?: {
      technique: string;
      goal: string;
      progress: any[];
      analysis?: {
        emotionalState: string;
        themes: string[];
        riskLevel: number;
        recommendedApproach: string;
        progressIndicators: string[];
      };
    };
  }
  
  export interface ChatSession {
    sessionId: string;
    messages: ChatMessage[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface ApiResponse {
    message: string;
    response?: string;
    analysis?: {
      emotionalState: string;
      themes: string[];
      riskLevel: number;
      recommendedApproach: string;
      progressIndicators: string[];
    };
    metadata?: {
      technique: string;
      goal: string;
      progress: any[];
    };
  }
  
  const API_BASE =
    process.env.BACKEND_API_URL ||
    "https://ai-therapist-agent-backend.onrender.com";
  
  // Helper function to get auth headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    };
  };
  
  // Removed duplicate createChatSession function
  
  export const sendChatMessage = async (
    sessionId: string,
    message: string
  ): Promise<ApiResponse> => {
    try {
      console.log(`Sending message to session ${sessionId}:`, message);
      const response = await fetch(
        `${API_BASE}/chat/sessions/${sessionId}/messages`,
        {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({ message }),
        }
      );
  
      if (!response.ok) {
        const error = await response.json();
        console.error("Failed to send message:", error);
        throw new Error(error.error || "Failed to send message");
      }
  
      const data = await response.json();
      console.log("Message sent successfully:", data);
      return data;
    } catch (error) {
      console.error("Error sending chat message:", error);
      throw error;
    }
  };
  
  export const getChatHistory = async (
    sessionId: string
  ): Promise<ChatMessage[]> => {
    try {
      console.log(`Fetching chat history for session ${sessionId}`);
      const response = await fetch(
        `${API_BASE}/chat/sessions/${sessionId}/history`,
        {
          headers: getAuthHeaders(),
        }
      );
  
      if (!response.ok) {
        const error = await response.json();
        console.error("Failed to fetch chat history:", error);
        throw new Error(error.error || "Failed to fetch chat history");
      }
  
      const data = await response.json();
      console.log("Received chat history:", data);
  
      if (!Array.isArray(data)) {
        console.error("Invalid chat history format:", data);
        throw new Error("Invalid chat history format");
      }
  
      // Ensure each message has the correct format
      return data.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
        timestamp: new Date(msg.timestamp),
        metadata: msg.metadata,
      }));
    } catch (error) {
      console.error("Error fetching chat history:", error);
      throw error;
    }
  };
  
  // Mock chat sessions data
  const mockChatSessions = [
    {
      id: "1",
      userId: "default-user",
      title: "First Therapy Session",
      status: "completed",
      summary: "Discussed anxiety management techniques",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
    {
      id: "2",
      userId: "default-user",
      title: "Follow-up Session",
      status: "scheduled",
      summary: "",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
    },
  ];

  export async function getAllChatSessions() {
    try {
      // In a real app, this would fetch from your backend
      // For now, return mock data
      return mockChatSessions;
    } catch (error) {
      console.error("Error fetching chat sessions:", error);
      return [];
    }
  }

  export async function getChatSession(sessionId: string) {
    try {
      const session = mockChatSessions.find(s => s.id === sessionId);
      return session || null;
    } catch (error) {
      console.error("Error fetching chat session:", error);
      return null;
    }
  }

  export async function createChatSession(data: {
    userId: string;
    title: string;
    summary?: string;
  }) {
    try {
      const newSession = {
        id: Date.now().toString(),
        userId: data.userId,
        title: data.title,
        status: "active",
        summary: data.summary || "",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      mockChatSessions.push(newSession);
      return newSession;
    } catch (error) {
      console.error("Error creating chat session:", error);
      throw error;
    }
  }