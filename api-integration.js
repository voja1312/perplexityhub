// PerplexityHub API Integration Module
// Premium AI Tools Platform - Enterprise Grade

class PerplexityHubAPI {
    constructor() {
        this.apiKey = this.getAPIKey();
        this.baseURL = 'https://api.openai.com/v1';
        this.model = 'gpt-4-turbo-preview';
        this.maxTokens = 2000;
        this.temperature = 0.7;
        
        // Usage tracking
        this.usageCount = parseInt(localStorage.getItem('usageCount') || '0');
        this.lastResetDate = localStorage.getItem('lastResetDate') || new Date().toDateString();
        this.userPlan = localStorage.getItem('userPlan') || 'free';
        
        // Daily limits
        this.dailyLimits = {
            free: 5,
            pro: 500,
            enterprise: Infinity
        };
        
        // Initialize
        this.checkDailyReset();
    }
    
    getAPIKey() {
        // First check environment variable
        if (typeof process !== 'undefined' && process.env && process.env.OPENAI_API_KEY) {
            return process.env.OPENAI_API_KEY;
        }
        
        // Then check localStorage
        const storedKey = localStorage.getItem('openai_api_key');
        if (storedKey) {
            return storedKey;
        }
        
        // Prompt user for API key
        const key = prompt('Please enter your OpenAI API key to use AI features:');
        if (key) {
            localStorage.setItem('openai_api_key', key);
            return key;
        }
        
        return null;
    }
    
    checkDailyReset() {
        const today = new Date().toDateString();
        if (today !== this.lastResetDate) {
            this.usageCount = 0;
            this.lastResetDate = today;
            localStorage.setItem('usageCount', '0');
            localStorage.setItem('lastResetDate', today);
        }
    }
    
    checkUsageLimit() {
        this.checkDailyReset();
        const limit = this.dailyLimits[this.userPlan];
        if (this.usageCount >= limit) {
            throw new Error(`Daily limit reached (${limit} requests). Please upgrade to continue.`);
        }
        return true;
    }
    
    trackUsage() {
        this.usageCount++;
        localStorage.setItem('usageCount', this.usageCount.toString());
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'api_usage', {
                'event_category': 'engagement',
                'event_label': this.userPlan,
                'value': this.usageCount
            });
        }
    }
    
    async makeRequest(endpoint, data) {
        if (!this.apiKey) {
            throw new Error('No API key configured. Please add your OpenAI API key.');
        }
        
        // Check usage limits
        this.checkUsageLimit();
        
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error?.message || 'API request failed');
            }
            
            // Track successful usage
            this.trackUsage();
            
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
    
    // TOOL-SPECIFIC METHODS
    
    // ROI Calculator
    async calculateROI(data) {
        const prompt = `As a financial analyst, calculate the ROI for an AI implementation with the following parameters:
        - Initial Investment: $${data.investment}
        - Monthly Savings: $${data.savings}
        - Implementation Time: ${data.months} months
        - Industry: ${data.industry}
        
        Provide a detailed financial analysis including:
        1. ROI percentage
        2. Payback period
        3. Net present value (NPV)
        4. Break-even analysis
        5. Risk assessment
        6. Recommendations
        
        Format the response as a professional financial report.`;
        
        const response = await this.makeRequest('/chat/completions', {
            model: this.model,
            messages: [
                { role: 'system', content: 'You are a senior financial analyst specializing in technology ROI calculations.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: this.maxTokens,
            temperature: 0.3 // Lower temperature for financial calculations
        });
        
        return response.choices[0].message.content;
    }
    
    // Prompt Optimizer
    async optimizePrompt(originalPrompt, strategy = 'clarity') {
        const strategies = {
            clarity: 'Focus on making the prompt clearer and more specific',
            creativity: 'Enhance the prompt to generate more creative responses',
            technical: 'Optimize for technical accuracy and detail',
            concise: 'Make the prompt more concise while maintaining effectiveness'
        };
        
        const prompt = `Optimize the following prompt using the "${strategy}" strategy (${strategies[strategy]}):

Original prompt: "${originalPrompt}"

Provide:
1. The optimized prompt
2. Key improvements made
3. Expected impact on results
4. Alternative versions (2-3 variations)
5. Best practices applied`;
        
        const response = await this.makeRequest('/chat/completions', {
            model: this.model,
            messages: [
                { role: 'system', content: 'You are an expert in prompt engineering and AI optimization.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: this.maxTokens,
            temperature: 0.5
        });
        
        return response.choices[0].message.content;
    }
    
    // AI Comparison
    async compareAIModels(query) {
        const prompt = `Compare how different AI models would handle this query: "${query}"

Analyze and compare:
1. GPT-4 approach and expected output
2. Claude approach and expected output
3. Gemini approach and expected output
4. Perplexity approach and expected output

For each model, evaluate:
- Strengths for this query type
- Potential limitations
- Expected response quality
- Best use cases
- Estimated response time
- Cost considerations

Provide a recommendation for which model is best suited for this specific query.`;
        
        const response = await this.makeRequest('/chat/completions', {
            model: this.model,
            messages: [
                { role: 'system', content: 'You are an AI systems expert with deep knowledge of various language models.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: this.maxTokens,
            temperature: 0.4
        });
        
        return response.choices[0].message.content;
    }
    
    // Citation Generator
    async generateCitation(sourceData, format) {
        const prompt = `Generate a properly formatted ${format} citation for the following source:

Title: ${sourceData.title}
Authors: ${sourceData.authors}
Publication: ${sourceData.publication || 'N/A'}
Year: ${sourceData.year}
URL: ${sourceData.url || 'N/A'}
DOI: ${sourceData.doi || 'N/A'}
Pages: ${sourceData.pages || 'N/A'}
Volume: ${sourceData.volume || 'N/A'}
Issue: ${sourceData.issue || 'N/A'}

Generate:
1. The complete citation in ${format} format
2. In-text citation format
3. Bibliography entry
4. Any format-specific notes
5. Common mistakes to avoid with this citation type`;
        
        const response = await this.makeRequest('/chat/completions', {
            model: this.model,
            messages: [
                { role: 'system', content: 'You are an academic citation expert familiar with all major citation formats.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: 1000,
            temperature: 0.1 // Very low temperature for accuracy
        });
        
        return response.choices[0].message.content;
    }
    
    // Research Assistant
    async performResearch(query, filters = {}) {
        const prompt = `Conduct comprehensive research on: "${query}"

Research parameters:
- Focus: ${filters.focus || 'general'}
- Time frame: ${filters.timeframe || 'all time'}
- Source types: ${filters.sources || 'all'}
- Depth: ${filters.depth || 'comprehensive'}

Provide:
1. Executive summary (3-5 key points)
2. Detailed findings organized by theme
3. Key statistics and data points
4. Notable trends and patterns
5. Expert opinions and citations
6. Contradictory viewpoints (if any)
7. Future implications
8. Recommended further reading
9. Gaps in current knowledge
10. Actionable insights

Format as a professional research report with clear sections.`;
        
        const response = await this.makeRequest('/chat/completions', {
            model: this.model,
            messages: [
                { role: 'system', content: 'You are a senior research analyst with expertise across multiple domains.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: this.maxTokens,
            temperature: 0.6
        });
        
        return response.choices[0].message.content;
    }
    
    // Prompt Chain Builder
    async buildPromptChain(nodes) {
        const nodeDescriptions = nodes.map((node, index) => 
            `Step ${index + 1}: ${node.type} - ${node.content}`
        ).join('\n');
        
        const prompt = `Design an optimal prompt chain for the following workflow:

${nodeDescriptions}

Create:
1. Optimized prompts for each step
2. Data flow between steps
3. Error handling strategies
4. Expected outputs at each stage
5. Overall workflow optimization suggestions
6. Alternative chain configurations
7. Performance considerations
8. Best practices for this workflow type`;
        
        const response = await this.makeRequest('/chat/completions', {
            model: this.model,
            messages: [
                { role: 'system', content: 'You are an expert in workflow automation and prompt chaining.' },
                { role: 'user', content: prompt }
            ],
            max_tokens: this.maxTokens,
            temperature: 0.5
        });
        
        return response.choices[0].message.content;
    }
    
    // Generic completion method
    async complete(prompt, systemPrompt = null) {
        const messages = [];
        
        if (systemPrompt) {
            messages.push({ role: 'system', content: systemPrompt });
        }
        
        messages.push({ role: 'user', content: prompt });
        
        const response = await this.makeRequest('/chat/completions', {
            model: this.model,
            messages: messages,
            max_tokens: this.maxTokens,
            temperature: this.temperature
        });
        
        return response.choices[0].message.content;
    }
    
    // Get usage stats
    getUsageStats() {
        return {
            used: this.usageCount,
            limit: this.dailyLimits[this.userPlan],
            remaining: Math.max(0, this.dailyLimits[this.userPlan] - this.usageCount),
            plan: this.userPlan,
            percentage: (this.usageCount / this.dailyLimits[this.userPlan]) * 100
        };
    }
}

// Create global instance
window.perplexityAPI = new PerplexityHubAPI();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PerplexityHubAPI;
}