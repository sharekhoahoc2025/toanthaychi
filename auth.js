// List of valid codes
const validCodes = [
    '280407', '481562', '926374', '357819', '642903',
    '815647', '293048', '567123', '408935', '721690',
    '384516', '957028', '620473', '135892', '749061',
    '502837', '916425', '683094', '247518', '359670',
    '824159', '607382', '491526', '738204', '562891',
    '903475', '216843', '579012', '384627', '651930',
    '427815', '890346', '153792', '608425', '937164',
    '245078', '619532', '874901', '326457', '590813',
    '763249', '418506', '925731', '647082', '301895',
    '584217', '932640', '176583', '409725', '658931',
    '827304', '591468', '342790', '615823', '908457',
    '273614', '546089', '819235', '402768', '735912',
    '168547', '923085', '654371', '387902', '510624',
    '749136', '205893', '638417', '971520', '324689',
    '856073', '419258', '782941', '035672', '698413',
    '247506', '513829', '876042', '329175', '604938',
    '951267', '483590', '726814', '095382', '638451',
    '217904', '569378', '802145', '374690', '921583',
    '645207', '398514', '712869', '056342', '839701',
    '264835', '597108', '823456', '401789', '635902',
    '978314', '342067', '615829', '890473', '280407'
];

// Add CSS styles to the page
const addStyles = () => {
    const styles = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            
            .login-modal {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                pointer-events: auto;
                animation: fadeIn 0.3s ease-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from { 
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            
            .login-modal__content {
                background: #ffffff;
                border-radius: 24px;
                padding: 48px 40px;
                width: 90%;
                max-width: 480px;
                text-align: center;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                animation: slideUp 0.4s ease-out;
                position: relative;
                overflow: hidden;
            }
            
            .login-modal__content::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #6366f1, #8b5cf6, #d946ef, #ec4899);
                background-size: 200% 100%;
                animation: gradientShift 3s ease infinite;
            }
            
            @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            
            .login-modal__content h2 {
                margin: 0 0 12px 0;
                font-size: 28px;
                font-weight: 700;
                background: linear-gradient(135deg, #1f2937, #4b5563);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                line-height: 1.2;
            }
            
            .login-modal__content p {
                margin: 0 0 32px 0;
                font-size: 16px;
                color: #6b7280;
                line-height: 1.5;
                font-weight: 400;
            }
            
            .login-form {
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
            
            .input-group {
                position: relative;
            }
            
            .input-group input {
                width: 100%;
                padding: 16px 20px;
                border: 2px solid #e5e7eb;
                border-radius: 16px;
                font-size: 18px;
                font-weight: 500;
                text-align: center;
                letter-spacing: 2px;
                transition: all 0.2s ease;
                background: rgb(255, 255, 255);
                color: #1f2937;
                outline: none;
                box-sizing: border-box;
            }
            
            .input-group input:focus {
                border-color: #6366f1;
                box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
                background: rgb(255, 255, 255);
            }
            
            .input-group input::placeholder {
                color: #9ca3af;
                letter-spacing: normal;
                font-weight: 400;
            }
            
            .input-group input.error {
                border-color: #ef4444;
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
                animation: shake 0.5s ease-in-out;
            }
            
            .submit-btn {
                padding: 16px 32px;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                border: none;
                border-radius: 16px;
                color: white;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
            }
            
            .submit-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.5s ease;
            }
            
            .submit-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
            }
            
            .submit-btn:hover::before {
                left: 100%;
            }
            
            .submit-btn:active {
                transform: translateY(0);
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
            }
            
            .submit-btn:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
            }
            
            .error-message {
                color: #ef4444;
                font-size: 14px;
                font-weight: 500;
                margin-top: 8px;
                min-height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
            }
            
            .error-message.show {
                animation: slideDown 0.3s ease-out;
            }
            
            @keyframes slideDown {
                from { 
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .security-badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(16, 185, 129, 0.1);
                color: #059669;
                padding: 8px 16px;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 500;
                margin-top: 16px;
            }
            
            .security-badge::before {
                content: '🔒';
                font-size: 14px;
            }
            
            .website-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3);
                z-index: 9998;
                animation: fadeIn 0.3s ease-out;
            }
            
            @media (max-width: 640px) {
                .login-modal__content {
                    margin: 20px;
                    padding: 32px 24px;
                }
                
                .login-modal__content h2 {
                    font-size: 24px;
                }
                
                .input-group input {
                    padding: 14px 16px;
                    font-size: 16px;
                }
                
                .submit-btn {
                    padding: 14px 28px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
};

// Function to validate a code
const validateCode = (code) => {
    if (!validCodes.includes(code)) {
        // Block website access
        disableWebsite();
        return false;
    }
    return true;
};

// Function to disable website
const disableWebsite = () => {
    document.body.style.opacity = '0.5';
    document.body.style.pointerEvents = 'none';
    
    // Add overlay to prevent interaction
    const overlay = document.createElement('div');
    overlay.className = 'website-overlay';
    document.body.appendChild(overlay);

    // Ensure login modal is always on top and interactive
    const modal = document.querySelector('.login-modal');
    if (modal) {
        modal.style.zIndex = '9999';
        modal.style.pointerEvents = 'auto';
    }
};

// Function to enable website
const enableWebsite = () => {
    document.body.style.opacity = '1';
    document.body.style.pointerEvents = 'auto';
    
    // Remove overlay if exists
    const overlay = document.querySelector('.website-overlay');
    if (overlay) {
        overlay.remove();
    }
};

// Function to show error message with animation
const showError = (message, input, errorElement) => {
    errorElement.textContent = message;
    errorElement.classList.add('show');
    input.classList.add('error');
    
    // Remove error styling after animation
    setTimeout(() => {
        input.classList.remove('error');
    }, 500);
    
    // Clear error message after 3 seconds
    setTimeout(() => {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }, 3000);
};

// Function to show success animation
const showSuccess = (callback) => {
    const modal = document.querySelector('.login-modal');
    const content = modal.querySelector('.login-modal__content');
    
    // Add success animation
    content.style.transform = 'scale(1.05)';
    content.style.transition = 'transform 0.2s ease';
    
    setTimeout(() => {
        content.style.transform = 'scale(1)';
        setTimeout(() => {
            modal.style.opacity = '0';
            modal.style.transform = 'scale(0.95)';
            modal.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                callback();
            }, 300);
        }, 100);
    }, 200);
};

// Function to show login modal
const showLoginModal = () => {
    // Add styles first
    addStyles();
    
    const modal = document.createElement('div');
    modal.className = 'login-modal';
    
    modal.innerHTML = `
        <div class="login-modal__content">
            <h2>Xác thực truy cập</h2>
            <p>Vui lòng nhập mã đăng nhập được cung cấp để tiếp tục sử dụng website</p>
            
            <div class="login-form">
                <div class="input-group">
                    <input type="text" id="loginCode" maxlength="6" placeholder="Nhập mã 6 chữ số" autocomplete="off">
                </div>
                
                <button class="submit-btn" id="submitCode">
                    Xác nhận đăng nhập
                </button>
                
                <div class="error-message"></div>
            </div>
            
            <div class="security-badge">
                Bảo mật an toàn
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Get elements
    const input = modal.querySelector('#loginCode');
    const submitBtn = modal.querySelector('#submitCode');
    const errorMsg = modal.querySelector('.error-message');

    // Focus on input when modal opens
    setTimeout(() => input.focus(), 100);

    // Only allow numbers
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        
        // Clear error state when user types
        if (e.target.classList.contains('error')) {
            e.target.classList.remove('error');
            errorMsg.textContent = '';
            errorMsg.classList.remove('show');
        }
    });

    // Handle Enter key
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !submitBtn.disabled) {
            submitBtn.click();
        }
    });

    // Handle form submission
    submitBtn.addEventListener('click', () => {
        const code = input.value.trim();
        
        // Disable button during processing
        submitBtn.disabled = true;
        submitBtn.textContent = 'Đang xác thực...';
        
        // Simulate processing delay
        setTimeout(() => {
            if (code.length !== 6) {
                showError('Mã đăng nhập phải có đúng 6 chữ số', input, errorMsg);
                submitBtn.disabled = false;
                submitBtn.textContent = 'Xác nhận đăng nhập';
                input.focus();
                return;
            }

            if (validateCode(code)) {
                // Success animation
                submitBtn.textContent = 'Đăng nhập thành công!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                showSuccess(() => {
                    localStorage.setItem('isAuthenticated', 'true');
                    modal.remove();
                    document.body.style.overflow = '';
                    enableWebsite();
                });
            } else {
                showError('Mã đăng nhập không hợp lệ. Vui lòng thử lại.', input, errorMsg);
                input.value = '';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Xác nhận đăng nhập';
                input.focus();
            }
        }, 800);
    });
};

// Check authentication on page load
window.addEventListener('load', () => {
    if (!localStorage.getItem('isAuthenticated')) {
        disableWebsite();
        showLoginModal();
    }
});