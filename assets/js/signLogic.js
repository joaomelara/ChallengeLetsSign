const canvas = document.getElementById('signatureCanvas');
        const ctx = canvas.getContext('2d');
        let drawing = false;

        canvas.addEventListener('mousedown', () => drawing = true);
        canvas.addEventListener('mouseup', () => drawing = false);
        canvas.addEventListener('mouseout', () => drawing = false);
        canvas.addEventListener('mousemove', draw);

        function draw(e) {
            if (!drawing) return;
            const rect = canvas.getBoundingClientRect();
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000';

            ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
        }

        function toggleSignatureMode(mode) {
        const typedContainer = document.getElementById('typedSignatureContainer');
        const drawnContainer = document.getElementById('drawnSignatureContainer');

        if (mode === 'typed') {
            typedContainer.style.display = 'block';
            drawnContainer.style.display = 'none';
        } else if (mode === 'drawn') {
            typedContainer.style.display = 'none';
            drawnContainer.style.display = 'block';
        }
    }